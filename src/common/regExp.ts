// import { isNumber } from "lodash-es"
// import { notNumberErrorMessage } from "./constants/index.js"

/**
 * @author oliver lou
 * @Date 2022-04-28 14:26:43
 * @description 检查是否是一个移动电话号
 * @param {*} value
 * @return {*}
 */
// Note: 字符串或者数字好像都好使
export const mobilePhoneNumberRegExp = /^1(3|4|5|6|7|8|9)\d{9}$/
export function isMobilePhoneNumber(value) {
  // if (!isNumber(value)) {
  //   throw new TypeError(notNumberErrorMessage)
  // }

  return mobilePhoneNumberRegExp.test(value)
}

/**
 * @author oliver lou
 * @Date 2022-04-28 15:29:32
 * @description 检查是否是一个身份证号
 * @param {*}
 * @return {*}
 */
export const identityCardNumberRegExp =
  /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/
export function isIdentityCardNumber(value) {
  return identityCardNumberRegExp.test(value)
}

/**
 * @author oliver lou
 * @Date 2022-04-28 15:49:03
 * @description 检查是否是一个护照号
 * @param {*}
 * @return {*}
 */
export const passportNumberRegExp =
  /^1[45][0-9]{7}$|([P|p|S|s]\d{7}$)|([S|s|G|g]\d{8}$)|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8}$)|([H|h|M|m]\d{8,10})$/
export function isPassportNumber(value) {
  return passportNumberRegExp.test(value)
}

/**
 * @author oliver lou
 * @Date 2022-04-28 15:54:39
 * @description 检查是否是一个军官证号
 * @param {*}
 * @return {*}
 */
export const militaryIdentityCardNumberRegExp = /^[a-zA-Z0-9]{7,21}$/
export function isMilitaryIdentityCardNumber(value) {
  return militaryIdentityCardNumberRegExp.test(value)
}

/**
 * @author oliver lou
 * @Date 2022-04-28 15:55:30
 * @description 检查是否是一个港澳通行证号
 * @param {*}
 * @return {*}
 */
export const travelCardNumberRegExp = /^[a-zA-Z0-9]{5,21}$/
export function isTravelCardNumber(value) {
  return travelCardNumberRegExp.test(value)
}

//  校验统一社会信用代码格式
const checkSocialCreditCode = (rule, Code, callbak) => {
  const patrn = /^[0-9A-Z]+$/
  const Islength =
    /^(?!^(\\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\\w~!@#$%^&*?]{8,18}$/
  if (!Code) {
    return callbak(new Error('请输入社会信用代码'))
  } else if (!patrn.test(Code) || Islength.test(Code)) {
    return callbak(new Error('请输入正确的社会统一信用代码'))
  } else {
    let Ancode // 统一社会信用代码的每一个值
    let Ancodevalue // 统一社会信用代码每一个值的权重
    let total = 0
    const weightedfactors = [
      1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28,
    ] // 加权因子
    const str = '0123456789ABCDEFGHJKLMNPQRTUWXY'
    // 不用I、O、S、V、Z
    for (let i = 0; i < Code.length - 1; i++) {
      Ancode = Code.substring(i, i + 1)
      Ancodevalue = str.indexOf(Ancode)
      total = total + Ancodevalue * weightedfactors[i]
      // 权重与加权因子相乘之和
    }
    let logiccheckcode = 31 - (total % 31)
    if (logiccheckcode == 31) {
      logiccheckcode = 0
    }
    const Str = '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y'
    const Array_Str = Str.split(',')
    let logiccheckcodeStr = Array_Str[logiccheckcode]

    const checkcode = Code.substring(17, 18)
    if (logiccheckcodeStr != checkcode) {
      callbak(new Error('请输入正确的社会统一信用代码'))
      return false
    } else {
      callbak()
    }
  }
}
//  校验网站域名
const checkwebDomain = (rule, value, callback) => {
  const webDomain =
    /^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?$/
  if (value === '' || value === null) {
    callback(new Error('请输入网站域名'))
    return false
  } else if (!webDomain.test(value) || value.length > 30) {
    callback(new Error('请输入正确的网站域名'))
    return false
  } else {
    callback()
  }
}

// 通用的通行证
// export const passNumberRegExp =

/**
 * @author oliver lou
 * @Date 2023-03-20 20:18:52
 * @description 检查是否是一个电子邮箱
 * @param {*} w
 * @return {*}
 */
export const emailRegExp = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/
export function isEmail(value: string): boolean {
  return emailRegExp.test(value)
}

/**
 * @author oliver lou
 * @Date 2023-07-10 09:19:20
 * @description 格式化金额
 * @param {string} str
 * @return { string }
 */
export const formatAccount = (str: string): string => {
  const res = str.split('').reverse().join('')
  const reg = /(\d\d\d)(?=\B)/g
  return res
    .replace(reg, (match) => {
      return match + ','
    })
    .split('')
    .reverse()
    .join('')
}
