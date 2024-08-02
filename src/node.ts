export * from './common/index'
import path from 'node:path'
import os from 'node:os'

/**
 * @author oliver lou
 * @Date 2023-04-04 21:58:18
 * @description 作为一个单独的模块使用，用于替代CommonJS中的__dirname，兼容macOS和windows，使用方法`const * __dirname = getDirname(import.meta.url)`
 * @return {*}
 */

export function getDirname(url: string): string {
  if (os.platform() === 'win32') {
    return path.dirname(decodeURI(url).slice(8).replace(/\//g, '\\'))
  } else {
    return path.dirname(url.slice(7))
  }
}