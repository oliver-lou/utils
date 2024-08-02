import { isNumber, isString } from "./checkDataType"

/**
 * @author oliver lou
 * @Date 2022-11-28 15:56:10
 * @description 如果传入两个number类型，就返回两者之和；如果传入两个string类型，就执行大数相加逻辑；其他情况不处理
 * @return {*}
 */
type NumberOrString = number | string
export function add(num1: number, num2: number): number;
export function add(num1: string, num2: string): string;
export function add(num1: NumberOrString, num2: NumberOrString): NumberOrString {
  if (isString(num1) && isString(num2)) {
    // 大数相加
    const maxLength = Math.max(num1.length, num2.length)
    // num1和num2位数对齐，位数较小的前面补0
    num1 = num1.padStart(maxLength, '0')
    num2 = num2.padStart(maxLength, '0')
    let res = '' // 存放最后得到的结果
    let figure = 0 // figure = 两个数字对应位数数值相加 + 进位
    let currentNum = 0 // 对应位数的结果
    let carry = 0 // 进位
    // 倒着循环
    for (let i = num1.length - 1;i >= 0;i--) {
      figure = parseInt(num1[i]) + parseInt(num2[i]) + carry
      currentNum = figure % 10
      carry = Math.floor(figure / 10)
      res = currentNum + res
    }

    // 解决会最后会进一位的问题
    if (carry === 1) {
      res = '1' + res
    }
    return res
  } else if(isNumber(num1) && isNumber(num2)) {
    return num1 + num2
  } else {
    throw new TypeError('需传入两个数字或两个字符串作为参数！')
  }
}
