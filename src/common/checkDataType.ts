import { notNarrowObjectErrorMessage, notObjectErrorMessage } from "./constants/index"

/**
 * @author oliver lou
 * @Date 2020-09-29 14:30:37
 * @description 判断传入的值是不是一个布尔值
 * @param {any} boolean
 * @return {*}
 */
export function isBoolean(bool: any): bool is boolean {
  return typeof bool === "boolean"
}

/**
 * @author oliver lou
 * @Date 2020-09-29 14:30:37
 * @description 判断传入的值是不是一个数字
 * @param {any} num
 * @return {*}
 */
export function isNumber(num: any): num is number {
  return typeof num === "number"
}

/**
 * @author oliver lou
 * @Date 2020-09-29 14:30:37
 * @description 判断传入的值是不是一个字符串
 * @param {any} str
 * @return {*}
 */
export function isString(str: any): str is string {
  return typeof str === "string"
}

/**
 * @author oliver lou
 * @Date 2022-11-28 16:55:21
 * @description 判断传入的值是不是一个symbol
 * @return {*}
 */
export function isSymbol(symbols: any): symbols is symbol {
  return typeof symbols === 'symbol'
}

/**
 * @author oliver lou
 * @Date 2022-07-15 16:48:25
 * @description 检查传入的值是不是一个数组
 * @param {*} data
 * @return {*}
 */
export function isArray(data: any): data is any[] {
  return Array.isArray(data)
}

/**
 * @author oliver lou
 * @Date 2022-08-08 20:25:49
 * @description 获取JS数据类型，返回一个语义化的字符串
 * @param {any} data
 * @return {*}
 */
export function getDataTypeof(data: any): string {
  const toString = Object.prototype.toString,
    map: any = {
      "[object Undefined]": "undefined",
      "[object Null]": "null",
      "[object Boolean]": "boolean",
      "[object Number]": "number",
      "[object String]": "string",
      "[object Symbol]": "symbol",
      "[object Function]": "function",
      "[object Array]": "array",
      "[object Date]": "date",
      "[object RegExp]": "regExp",
      "[object Object]": "object",
      "[object Map]": "map",
      "[object Set]": "set",
      "[object WeakMap]": "weakMap",
      "[object WeakSet]": "weakSet",
    }
  return map[toString.call(data)]
}

/**
 * @author oliver lou
 * @Date 2021-03-02 22:55:23
 * @description 检查传入的值是不是一个对象
 * @param {*} obj
 * @return {boolean}
 */
export function isObject(obj: any): obj is object {
  return obj !== null && typeof obj === "object"
}

/**
 * @author oliver lou
 * @Date 2022-08-29 11:01:52
 * @description 检查传入的值是不是一个广义的对象
 * @param {*} obj
 * @return {boolean}
 */
//  * isObject({})
//  * // => true
//  *
//  * isObject([1, 2, 3])
//  * // => true
//  *
//  * isObject(Function)
//  * // => true
//  *
//  * isObject(null)
//  * // => false
export function isGeneralizedObject(obj: any): boolean {
  const dataType = typeof obj
  return obj !== null && (dataType === "object" || dataType === "function")
}

/**
 * @author oliver lou
 * @Date 2022-08-26 10:01:38
 * @description 判断是不是一个狭义的对象
 * @return {*}
 */
export function isNarrowObject(obj: any): boolean {
  if (getDataTypeof(obj) === "object") {
    return true
  } else {
    return false
  }
}

/**
 * @author oliver lou
 * @Date 2022-08-25 11:09:34
 * @description 判断一个对象是不是一个空对象
 * @param {*} obj
 * @return {*}
 */
export const isEmptyObject = (obj: any): boolean => {
  if (!isNarrowObject(obj)) {
    throw new TypeError(notNarrowObjectErrorMessage)
  }
  return Object.keys(obj).length === 0
}

/**
 * @author oliver lou
 * @Date 2024-08-01 12:01:29
 * @description 判断一个函数是不是async函数
 * @param {Function} fn
 * @return {*}
 */
export function isAsyncFunction(fn: Function): boolean {
  return fn[Symbol.toStringTag] === 'AsyncFunction'
}

/**
 * @author oliver lou
 * @Date 2024-08-01 12:02:18
 * @description 判断是不是一个类Promise
 * @param {*} value
 * @return {*}
 */
export function isPromiseLike(value: any): boolean {
  return (
    value !== null &&
    (typeof value === 'object' || typeof value === 'function') &&
    typeof value.then === 'function'
  )
}