/**
 * @author oliver lou
 * @Date 2023-03-20 21:33:21
 * @description 打乱数组（有副作用，直接更改原数组）
 * @param {Array} arr
 * @return {*}
 */
export function shuffleArray<T>(arr: Array<T>): Array<T> {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let randomIndex = Math.floor(Math.random() * (len - i))
    let item = arr[randomIndex]
    arr[randomIndex] = arr[i]
    arr[i] = item
  }
  return arr
}
