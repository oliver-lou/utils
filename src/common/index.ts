// @ts-nocheck
// import { debounce as a } from 'lodash-es'
export { getRandomInt, removeNullString, log } from "./utils"
export * from "./checkDataType"
export * from "./date"
export {
  checkSingleIp,
  checkNames,
  checkIp,
  checkAddress,
  checkDomain,
  checkIpOrDomain,
  checkPhone,
  checkMAC,
  checkRangeInt,
  checkPostbox,
  checkEmail,
  checkBlank,
  checkCascader,
} from "./validate"

import { notBooleanErrorMessage, notStringErrorMessage } from "./constants/index"
import { isBoolean, isString } from "./checkDataType"
// export * from './libs/qs/index'
export * from './number'
export * from './string'
export * from './object'
export * from './array'
export * from './algorithm'
export { formatAccount } from './regExp'

// export { isArray } from './src/checkDataType.js'

// export * from './ajax.js'
// export { storage } from "./localStorage"

// export { getCookie, setCookie } from "./cookie"

// export {
//   changeSimpleState__,
//   changeManySimpleState__,
//   changeSimpleList__,
// } from "./libs/dva/index.js"

// export { formatterEchartsMapProvinceAndCityName } from "./libs/echarts/index.js"
// export * from './libs/lodash-es/index.js'


/**
 * ip 转成数字
 * @param {*} ip
 */
export function ip2number(ip) {
  let numbers = ip.split(".")
  return (
    parseInt(numbers[0], 10) * 256 * 256 * 256 +
    parseInt(numbers[1], 10) * 256 * 256 +
    parseInt(numbers[2], 10) * 256 +
    parseInt(numbers[3], 10)
  )
}

/**
 * @Description: 用于拼接多个className
 * @Author: oliver lou
 * @Date: 2020-09-02 16:44:39
 * @Param: 无
 */
export const jointClassName = (arr) => {
  return arr.join(" ")
}

/**
 * @Description: 生成数字数组序列
 * @Author: oliver lou
 * @Date: 2020-09-24 15:44:05
 * @Param: 无
 */
export const generateNumberList = (start, end) => {
  return Array.from(new Array(end + 1).keys()).slice(start)
}

/**
 * @Description: 空格变换行显示
 * @Author: oliver lou
 * @Date: 2020-09-29 14:27:22
 * @Param: 无
 */
export function splitText(str) {
  if (!isString(str)) {
    return
  }
  const textArr = str.replace(/,/g, "\n")
  return textArr
}

/**
 * @Description: 判断一个对象所有的值是否都为假（经过隐式类型转换）
 * @Author: oliver lou
 * @Date: 2020-11-17 14:23:19
 * @Param: 无
 */
export const isAllNull = (obj) => {
  if (!isObject(obj)) {
    throw new TypeError("请传一个对象作为参数")
  } else {
    return Object.values(obj).some((item) => item)
  }
}

/**
 * 对象转字符串参数
 * @param {Object} object
 * eg:
 * {a;1,b:2} => a=1&b=2
 */
export function objectToParams(object) {
  if (!object || !typeof object === "object") {
    return ""
  }

  let paramsArr = []

  for (let key in object) {
    let string = key + "=" + object[key]
    paramsArr.push(encodeURI(string))
  }

  return paramsArr.join("&")
}

/**
 * @Title: 防抖函数
 * @Author: oliver lou
 * @Date: 2021-03-03 14:18:41
 * @Description: 解决了参数传递及this指向绑定的问题
 */
export function debounce(fn, ms) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, ms)
  }
}

/**
 * @Title: 函数节流
 * @Author: oliver lou
 * @Date: 2021-03-03 15:14:40
 * @Description: 解决了参数传递及this指向绑定的问题
 */
export function throttle(fn, ms = 300) {
  let timer,
    startTime = new Date()
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    let currentTime = new Date()
    if (currentTime - startTime <= ms) {
      //小于等于规定时间间隔时，用setTimeout在指定时间后再执行
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, ms)
    } else {
      //重新计时并执行函数
      startTime = currentTime
      fn.apply(this, arguments)
    }
  }
}

/**
 * @Title: 自定义事件的实现
 * @Author: oliver lou
 * @Date: 2021-03-03 20:41:15
 * @Description: 无
 */
export class CustomEvent {
  constructor() {
    this.handlers = {}
  }

  // 绑定事件处理函数
  on(eventName, listener) {
    if (this.handlers[eventName]) {
      this.handlers[eventName].push(listener)
    } else {
      let listeners = []
      listeners.push(listener)
      this.handlers[eventName] = listeners
    }
  }

  // 移除事件处理函数
  off(eventName, listener) {
    if (this.handlers[eventName]) {
      let index = this.handlers[eventName].indexOf(listener)
      if (index !== -1) {
        this.handlers[eventName].splice(index, 1)
        if (this.handlers[eventName].length === 0) {
          delete this.handlers[eventName]
        }
      }
    }
  }

  // 执行某个事先处理函数
  once(eventName, listener) {
    if (this.handlers[eventName]) {
      let index = this.handlers[eventName].indexOf(listener)
      let flag, result
      if (index !== -1) {
        this.handlers[eventName][index] = function () {
          if (flag) {
            return result
          }
          result = listener.apply(this, arguments)
          flag = true
        }
      }
    }
  }

  // 触发某个事件的事件处理函数
  trigger(eventName) {
    if (this.handlers[eventName]) {
      for (let f of this.handlers[eventName]) {
        f()
      }
    } else {
      throw new Error("不存在该类型的事件")
      // console.error('不存在该类型的事件');
    }
  }
}

/**
 * @Title: 使用setTimeout模拟setInterval
 * @Author: oliver lou
 * @Date: 2021-03-03 21:39:55
 * @Description: 封装的用setInterval模拟setTimeout，并且可以清除，并实现简单的计数，获取计数读取res.count的值，清除定时器使用clearTimeout(res.timer);
 */
export function interval(fn, ms) {
  let obj = {
    timer: null,
    count: 0,
  }
  function _loop() {
    fn()
    obj.timer = setTimeout(_loop, ms)
    obj.count++
  }
  setTimeout(_loop, ms)
  return obj
}

/**
 * @author oliver lou
 * @Date 2021-04-14 14:24:31
 * @description 用于实现中文按照拼音排序，有可能会不准，因为中文存在多音字
 * @param { Array } arr
 * @return { Array }
 */
export function localeCompare(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("需传入一个数组")
  } else {
    return arr.sort((item1, item2) => {
      return item1.localeCompare(item2)
    })
  }
}

/**
 * @author oliver lou
 * @Date 2021-04-15 11:29:39
 * @description 数组去重
 * @param {*} arr
 * @return {*}
 */
export function unique(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("需传入一个数组")
  } else {
    return Array.from(new Set(arr))
  }
}

/**
 * @author oliver lou
 * @Date 2022-03-19 20:43:21
 * @description 将16进制字符串转为10进制数字
 * @param {*} str
 * @return {*} Number
 */
export function transform16To10(str) {
  if (!isString(str)) {
    throw new TypeError(notStringErrorMessage)
  }
  return Number(`0x${str}`)
}

/**
 * @author oliver lou
 * @Date 2022-03-19 17:16:29
 * @description 将rbg颜色字符串转为matlab的颜色数组，如'#ff0000'转为[1,0,0]
 * @param {*} colorStr
 * @return {*} Array
 */
export function transformRGBColorToMatlabColor(colorStr) {
  if (!isString(colorStr)) {
    throw new TypeError(notStringErrorMessage)
  }

  if (!colorStr.startsWith("#")) {
    throw new Error(`颜色字符串需以'#'开头`)
  }

  if (colorStr.length !== 7) {
    throw new Error("颜色字符串需为7位")
  }

  const r = transform16To10(colorStr.slice(1, 3))
  const g = transform16To10(colorStr.slice(3, 5))
  const b = transform16To10(colorStr.slice(5, 7))
  return [r / 255, g / 255, b / 255]
}

/**
 * @author oliver lou
 * @Date 2022-08-15 17:54:24
 * @description 将数字转换为大写金额
 * @return {*}
 */
export function transformToAmountInWords(num: number | string): string {
  if (num == "") {
    return ""
  }

  // 最大处理的数字
  let maxNum = Number.MAX_SAFE_INTEGER

  if (num >= maxNum) {
    // 超出最大处理数字
    throw new Error(outOfNumberRange)
  }

  // 汉字的数字
  let cnNums = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"]
  // 基本单位
  let cnIntRadice = ["", "拾", "佰", "仟"]
  // 对应整数部分扩展单位
  let cnIntUnits = ["", "万", "亿", "兆"]
  // 对应小数部分单位
  let cnDecUnits = ["角", "分", "毫", "厘"]
  // 整数金额时后面跟的字符
  let cnInteger = "整"
  // 整型完以后的单位
  let cnIntLast = "元"

  // 金额整数部分
  let integerNum
  // 金额小数部分
  let decimalNum
  // 输出的中文金额字符串
  let chineseStr = ""
  // 分离金额后用的数组，预定义
  let parts

  if (num == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger
    return chineseStr
  }
  // 转换为字符串
  num = num.toString()
  if (num.indexOf(".") == -1) {
    integerNum = num
    decimalNum = ""
  } else {
    parts = num.split(".")
    integerNum = parts[0]
    decimalNum = parts[1].substr(0, 4)
  }
  // 获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0
    let IntLen = integerNum.length
    for (let i = 0; i < IntLen; i++) {
      let n = integerNum.substr(i, 1)
      let p = IntLen - i - 1
      let q = p / 4
      let m = p % 4
      if (n == "0") {
        zeroCount++
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0]
        }
        // 归零
        zeroCount = 0
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m]
      }
      if (m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q]
      }
    }
    chineseStr += cnIntLast
  }
  // 小数部分
  if (decimalNum != "") {
    let decLen = decimalNum.length
    for (let ii = 0; ii < decLen; ii++) {
      let nn = decimalNum.substr(ii, 1)
      if (nn != "0") {
        chineseStr += cnNums[Number(nn)] + cnDecUnits[ii]
      }
    }
  }
  if (chineseStr == "") {
    chineseStr += cnNums[0] + cnIntLast + cnInteger
  } else if (decimalNum == "") {
    chineseStr += cnInteger
  }
  return chineseStr
}

/**
 * @author oliver lou
 * @Date 2022-08-29 08:53:44
 * @description 判断一个函数是不是原生的函数
 * @param {*} func
 * @return {boolean}
 */
export function isNative(func: Function): boolean {
  return typeof func === "function" && /native code/.test(func.toString())
}

/**
 * @author oliver lou
 * @Date 2022-08-29 08:56:16
 * @description 创建一个__proto__为null的对象，并返回一个函数，检查某个key是否在这个对象中
 * @return {*}
 */
export function makeMap(str: string, expectsLowerCase: boolean): Function {
  if (!isString(str)) {
    throw new TypeError(`第一个参数${notStringErrorMessage}`)
  }
  if (!isBoolean(str)) {
    throw new TypeError(`第二个参数${notBooleanErrorMessage}`)
  }
  let map = Object.create(null)
  let list = str.split(",")
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase
    ? function (val: string) {
      return map[val.toLowerCase()]
    }
    : function (val: string) {
      return map[val]
    }
}

/**
 * @author oliver lou
 * @Date 2024-08-01 11:50:52
 * @description 深度克隆，可以处理循环引用、DOM对象、Date对象、RegExp对象
 * @param {*} sourceObj
 * @return {*}
 */
export function deepClone<T>(sourceObj: T): T {
  if (typeof sourceObj !== 'object') return;
  let newObj = isArray(sourceObj) ? [] : {};
  for (let key in sourceObj) {
    if (sourceObj.hasOwnProperty(key)) {
      if (!(key in newObj)) {
        if (sourceObj[key] instanceof Date) {
          newObj[key] = new Date(sourceObj[key].getTime());
        }
        else if (sourceObj[key] instanceof RegExp) {
          newObj[key] = new RegExp(sourceObj[key]);
        }
        else if (typeof sourceObj[key] === 'object' &&
          sourceObj[key].nodeType === 1) {
          let domEle = document.getElementsByTagName(sourceObj[key].nodeName)[0];
          newObj[key] = domEle.cloneNode(true);
        }
        else {
          newObj[key] =
            typeof sourceObj[key] === 'object'
              ? deepClone(sourceObj[key])
              : sourceObj[key];
        }
      }
    }
  }
  return newObj;
}

/**
 * @author oliver lou
 * @Date 2024-08-01 11:58:08
 * @description 通过MessageChannel实现深度克隆，可以处理循环引用，但不支持克隆DOM对象
 * @param {*} obj
 * @return {*}
 */
export function deepCloneByMessageChannel<T>(obj: T): T {
  return new Promise((resolve) => {
    const { port1, port2 } = new MessageChannel()
    port1.postMessage(obj)
    port2.onmessage = (msg) => {
      resolve(msg.data)
      // 如果不加这两行代码，在Node环境中会一直挂起，不会结束
      port1.close()
      port2.close()
    }
  })
}

/**
 * @author oliver lou
 * @Date 2024-08-01 12:06:24
 * @description 异步执行一个函数，并尽可能将其放在微队列中
 * @param {*} func
 * @return {*}
 */
function asyncRun(func: Function): void {
  if (typeof Promise !== undefined) {
    Promise.resolve().then(func)
  } else if (typeof process === 'object' && typeof process.nextTick === 'function') {
    // 在Node环境中的微队列
    process.nextTick(func)
  } else if (typeof MutationObserver !== undefined) {
    // 浏览器环境中的微队列
    const ob = new MutationObserver(func)
    const textNode = document.createTextNode('0')
    ob.observe(textNode, {
      characterData: true
    })
    textNode.data = '1'
  } else {
    setTimeout(func)
  }
}

/**
 * @author oliver lou
 * @Date 2024-08-01 17:50:25
 * @description 判断一个对象是否存在循环引用
 * @param {*} o
 * @param {*} set
 * @return {*}
 */
function isCircular (o: any, set: WeakSet = new WeakSet()): boolean {
  let isCyled = false;
  if (typeof o === "object" && o !== null) {
    if (set.has(o)) {
      return true;
    }
    set.add(o);
    for (const key in o) {
      if (isCircular(o[key], set)) {
        isCyled = true;
        break;
      }
    }
  }
  return isCyled;
};