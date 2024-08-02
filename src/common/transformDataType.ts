// 转换JS数据类型
/**
 * Convert an Array-like object to a real Array.
 */
/**
 * @author oliver lou
 * @Date 2020-10-30 10:17:02
 * @description 将一个类数组对象转化为数组
 * @param {*} min
 * @param {*} max
 * @return {Array}
 */
export function toArray(list: ArrayLike<any>, start?: number): any[] {
  start = start || 0;
  let i = list.length - start;
  let ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}
