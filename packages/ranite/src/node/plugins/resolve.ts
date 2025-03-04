import path from 'node:path';
import resolve from 'resolve';
import { pathExists } from 'fs-extra';
import type { Plugin } from '../plugin';
import type { ServerContext } from '../server/index';
import { DEFAULT_EXTENSIONS } from '../constants';
import { cleanUrl, isInternalRequest, removeImportQuery } from '../utils';

/**
 * @description: 路径解析插件，将请求路径转换成真实存在的文件路径
 */
export function resolvePlugin(): Plugin {
  let serverContext: ServerContext;
  return {
    name: 'ranite:resolve',
    configureServer(s) {
      serverContext = s;
    },
    async resolveId(id: string, importer?: string) {
      id = removeImportQuery(cleanUrl(id));
      if (isInternalRequest(id)) {
        return null;
      }
      if (path.isAbsolute(id)) {
        if (await pathExists(id)) {
          return { id };
        }
        // 加上 root 路径前缀，处理 /src/main.tsx 的情况
        id = path.join(serverContext.root, id);
        if (await pathExists(id)) {
          return { id };
        }
      } else if (id.startsWith('.')) {
        if (!importer) {
          throw new Error('`importer` should not be undefined');
        }
        const hasExtension = path.extname(id).length > 1;
        let resolvedId: string;
        // ./App.tsx
        if (hasExtension) {
          resolvedId = resolve.sync(id, { basedir: path.dirname(importer) });
          if (await pathExists(resolvedId)) {
            return { id: resolvedId };
          }
        } else {
          // ./App -> ./App.tsx
          for (const extname of DEFAULT_EXTENSIONS) {
            try {
              const withExtension = `${id}${extname}`;
              resolvedId = resolve.sync(withExtension, {
                basedir: path.dirname(importer),
              });
              if (await pathExists(resolvedId)) {
                return { id: resolvedId };
              }
            } catch (e) {
              console.log(e);
              continue;
            }
          }
        }
      }
      return null;
    },
  };
}
