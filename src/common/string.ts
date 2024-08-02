import { isString } from "./checkDataType";

/**
 * @author oliver lou
 * @Date 2023-03-20 20:31:03
 * @description 去除字符串前后的空白符，兼容所有浏览器
 * @param {string} str
 * @return {*}
 */
export function trim(str:string):string {
  if (str && isString(str)) {
    return str.replace(/(^\s*)|(\s*)$/g, '')
  } else {
    return str
  }
}

/**
 * @author oliver lou
 * @Date 2024-08-01 12:14:42
 * @description 使用码点切割文字，主要是为了解决一些特殊文字占两个码元的问题
 * @param {string} str
 * @param {number} pStart
 * @param {number} pEnd
 * @return {*}
 */
export function sliceByPoint (str: string, pStart: number, pEnd: number): string {
  let result = ''
  let pIndex = 0 // 码点的指针
  let cIndex = 0 // 码元的指针
  while (true) {
    if (pIndex >= pEnd || cIndex >= str.length) {
      break
    }
    
    const point = str.codePointAt(cIndex)
    if (pIndex >= pStart) {
      result += String.fromCodePoint(point)
    }
    pIndex++
    cIndex += point > 0xffff ? 2 : 1
  }
  return result
}