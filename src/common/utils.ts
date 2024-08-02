/**
 * @Description: 本文件用于存放工具函数（非纯函数）
 * @Author: oliver lou
 * @Date: 2020-11-18 10:25:13
 * @Param: 无
 */

/**
 * @author oliver lou
 * @Date 2020-10-30 10:17:02
 * @description [min,max] 范围内的随机整数时
 * @param {*} min
 * @param {*} max
 * @return {*}
 */
export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * @author oliver lou
 * @Date 2020-11-17 14:42:11
 * @description 封装清除为空的搜索参数的函数（有副作用）
 * @param {*} query
 * @return {*}
 */
export function removeNullString(query) {
  for (const key of Object.keys(query)) {
    if (query[key] === "") {
      delete query[key]
    }
  }
}

export function log() {
  // eslint-disable-next-line no-console
  console.log(...arguments)
}
