import {
  AudioRecorder,
  Color,
  ColorScheme,
  FMT,
  Hsl,
  Hsla,
  Mathjs,
  MimeType,
  Monitor,
  QuestQueue,
  Rgb,
  Rgba,
  SyncHook,
  TOTP,
  addClassToElement,
  appendUrl,
  audioVendor,
  canvasVendor,
  changeHumpToLowerCase,
  clearBr,
  clearStr,
  componentToHex,
  compose,
  connection,
  convertImageToBase64,
  createData,
  createDocumentFragment,
  createObjectURL,
  currentDevice,
  debounce,
  durationHandler,
  encodeUrl,
  escapeHtml,
  filterObj,
  formatJson,
  generateThrottle,
  getAllQueryString,
  getCookie,
  getCookieByName,
  getFrame,
  getHost,
  getMime,
  getPerformance,
  getPixelRatio,
  getStatus,
  getWindow,
  handleConsole,
  handleError,
  handleFetchHook,
  hexToRgb,
  hsbToRgb,
  hslToRgb,
  hsvToHsl,
  hsvToRgb,
  hue2rgb,
  imageRequest,
  isBangDevice,
  isClient,
  isImageSize,
  isMobile,
  isString,
  isWeiXin,
  localStorageGetItem,
  localStorageSetItem,
  mathjs,
  memoize,
  merge,
  mergeExports,
  networkSpeed,
  noop,
  perToNum,
  performanceTime,
  querystring,
  randomColor,
  randomString,
  range,
  removeClassToElement,
  removeGhosting,
  replaceOld,
  report,
  requestAnimation,
  requestUrlToBuffer,
  retain,
  rgbToHex,
  rgbToHsb,
  rgbToHsl,
  scriptOnLoad,
  setAttributeByGlobal,
  setFontSize2html,
  setMime,
  status,
  str2Xml,
  strParse,
  throttle,
  timeFormat,
  timestampToTime,
  webglVendor
} from '@/utils';
import type { CurrentDevice } from '@/utils'
import { reactify } from '@/react';
import {
  Router,
  Server,
  WSS,
  appendFile,
  body,
  colors,
  connect,
  get,
  getIPAdress,
  isColorSupported,
  paresUrl,
  prompt,
  queryFileInfo,
  readDir,
  readFile,
  readStream,
  runCommand,
  startTask,
  staticMiddleware,
  taskEnd,
  traverse,
  traverseSync,
  watchFile,
  writeStream,
} from '@/node';
import { ocr } from '@/ml';

export {
  ocr,
  reactify,
  AudioRecorder,
  Color,
  ColorScheme,
  FMT,
  Hsl,
  Hsla,
  Mathjs,
  MimeType,
  Monitor,
  QuestQueue,
  Rgb,
  Rgba,
  SyncHook,
  addClassToElement,
  appendUrl,
  audioVendor,
  canvasVendor,
  changeHumpToLowerCase,
  clearBr,
  clearStr,
  componentToHex,
  compose,
  connection,
  convertImageToBase64,
  createData,
  createDocumentFragment,
  createObjectURL,
  currentDevice,
  debounce,
  durationHandler,
  encodeUrl,
  escapeHtml,
  filterObj,
  formatJson,
  generateThrottle,
  getAllQueryString,
  getCookie,
  getCookieByName,
  getFrame,
  getHost,
  getMime,
  getPerformance,
  getPixelRatio,
  getStatus,
  getWindow,
  handleConsole,
  handleError,
  handleFetchHook,
  hexToRgb,
  hsbToRgb,
  hslToRgb,
  hsvToHsl,
  hsvToRgb,
  hue2rgb,
  imageRequest,
  isClient,
  isImageSize,
  isMobile,
  isString,
  isWeiXin,
  mathjs,
  memoize,
  merge,
  mergeExports,
  networkSpeed,
  noop,
  perToNum,
  performanceTime,
  querystring,
  randomColor,
  randomString,
  range,
  removeClassToElement,
  removeGhosting,
  replaceOld,
  report,
  requestAnimation,
  requestUrlToBuffer,
  retain,
  rgbToHex,
  rgbToHsb,
  rgbToHsl,
  scriptOnLoad,
  setMime,
  status,
  str2Xml,
  strParse,
  throttle,
  timeFormat,
  timestampToTime,
  webglVendor,
  Router,
  Server,
  appendFile,
  body,
  colors,
  connect,
  get,
  getIPAdress,
  isColorSupported,
  paresUrl,
  prompt,
  queryFileInfo,
  readDir,
  readFile,
  readStream,
  runCommand,
  startTask,
  staticMiddleware,
  taskEnd,
  traverse,
  traverseSync,
  watchFile,
  writeStream,
  WSS,
  TOTP,
  isBangDevice,
  localStorageGetItem,
  localStorageSetItem,
  setAttributeByGlobal,
  setFontSize2html
};

export type {
  CurrentDevice
}