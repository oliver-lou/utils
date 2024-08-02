/**
 * @author oliver lou
 * @Date 2023-03-20 20:52:02
 * @description 判断是不是一个类数组对象
 * @param {any} obj
 * @return {boolean}
 */
export function isArrayLike(obj: any): boolean {
  if (
    obj &&    // obj不是null、undefined、false、''、NaN、0
    typeof obj === 'object' && // obj是一个对象
    isFinite(obj.length) && // obj.length属性存在，且obj.length属性是一个有限数字
    obj.length >= 0 &&  // obj.length是一个非负数
    obj.length === Math.floor(obj.length) && // obj.length属性是一个整数
    obj.length < 4294967296 // obj.length属性小于2^32
  ) {
    return true
  } else {
    return false
  }
}
