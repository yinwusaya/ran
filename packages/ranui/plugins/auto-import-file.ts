import { Plugin } from 'vite';
import fs from "fs";
import { resolve } from 'path';
import ranuts from 'ranuts';
const { writeFile, readFile, queryFileInfo, readDir } = ranuts;

interface Options {
    ignore?: Array<string>,
    path: Array<string>,
    extensions: Array<string>,
    defaultImport?: string
}
/**
 * @description: 用于生成assets/icon目录下的文件名列表
 */
const loadIcons = async () => {
    const dirPath = resolve(__dirname, '../assets/icons')
    const fileNameList = await readDir({ dirPath }) || []
    const result = fileNameList.filter((item: string) => item[0] !== '.').map((item: string) => {
      const [name, _] = item.split('.')
      return name
    })
    console.log('fileNameList---->', result);
    return fileNameList
  }

const createIndex = async (options: Options, entry: string) => {
    let content = ''
    const { path = [], extensions = [], ignore = [] } = options
    /**
     * @description: 递归查找目录
     * @param {Array} path
     */
    const recurveFile = async (path: Array<string>) => {
        for (const item of path) {
            const { status, data } = await queryFileInfo(item)
            const extension = item.substring(item.lastIndexOf('.'))
            if (status && data.isFile() && extensions.includes(extension) && !ignore.includes(item)) {
                content += `import '${item}';\n`
            }
            if (status && data.isDirectory() && !ignore.includes(item)) {
                const fileList = fs.readdirSync(item)
                const list = fileList.map(children => `${item}/${children}`)
                await recurveFile(list)
            }
        }
    }
    try {
        await recurveFile(path)
        const currContent = await readFile(entry)
        if (currContent.status && currContent.data !== content) return await writeFile(entry, content)
        return { status: false }
    } catch (error) {
        throw error
    }

}

// 当初始目录中没有index的时候，不会主动生成，需要至少增加一个空index.js
export default function autoImportFilePlugin(options: Options): Plugin {
    // const autoImportRegex = /\|importFile(\?(raw|skipsvgo|dir))?$/
    return {
        name: 'vite-plugin-auto-import-file',        
        async config(context:any) {
            const { entry = '' } = context.build?.lib || {};
            // const { alias = {} } = context.resolve || {}
            // console.log('alias--->',alias);
            // const aliasList = Object.keys(alias)
            // loadIcons()
            if (entry) await createIndex(options, entry)
        },
        async handleHotUpdate(context:any) {
            const { entry = '' } = context.server.config.build.lib || {}
            if (entry) await createIndex(options, entry)
        }
    }
}