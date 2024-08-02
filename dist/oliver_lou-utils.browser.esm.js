/*!
 * @oliver_lou/utils v0.3.1
 * Copyright (c) 2024 oliver_lou
 * @license MIT
 */
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
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * @author oliver lou
 * @Date 2020-11-17 14:42:11
 * @description 封装清除为空的搜索参数的函数（有副作用）
 * @param {*} query
 * @return {*}
 */
function removeNullString(query) {
    for (const key of Object.keys(query)) {
        if (query[key] === "") {
            delete query[key];
        }
    }
}
function log() {
    // eslint-disable-next-line no-console
    console.log(...arguments);
}

const notStringErrorMessage = '需传入一个字符串作为参数！';
const notBooleanErrorMessage = '需传入一个布尔值作为参数！';
const notNarrowObjectErrorMessage = '需传入一个狭义对象作为参数！';

/**
 * @author oliver lou
 * @Date 2020-09-29 14:30:37
 * @description 判断传入的值是不是一个布尔值
 * @param {any} boolean
 * @return {*}
 */
function isBoolean(bool) {
    return typeof bool === "boolean";
}
/**
 * @author oliver lou
 * @Date 2020-09-29 14:30:37
 * @description 判断传入的值是不是一个数字
 * @param {any} num
 * @return {*}
 */
function isNumber(num) {
    return typeof num === "number";
}
/**
 * @author oliver lou
 * @Date 2020-09-29 14:30:37
 * @description 判断传入的值是不是一个字符串
 * @param {any} str
 * @return {*}
 */
function isString(str) {
    return typeof str === "string";
}
/**
 * @author oliver lou
 * @Date 2022-11-28 16:55:21
 * @description 判断传入的值是不是一个symbol
 * @return {*}
 */
function isSymbol(symbols) {
    return typeof symbols === 'symbol';
}
/**
 * @author oliver lou
 * @Date 2022-07-15 16:48:25
 * @description 检查传入的值是不是一个数组
 * @param {*} data
 * @return {*}
 */
function isArray$1(data) {
    return Array.isArray(data);
}
/**
 * @author oliver lou
 * @Date 2022-08-08 20:25:49
 * @description 获取JS数据类型，返回一个语义化的字符串
 * @param {any} data
 * @return {*}
 */
function getDataTypeof(data) {
    const toString = Object.prototype.toString, map = {
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
    };
    return map[toString.call(data)];
}
/**
 * @author oliver lou
 * @Date 2021-03-02 22:55:23
 * @description 检查传入的值是不是一个对象
 * @param {*} obj
 * @return {boolean}
 */
function isObject$1(obj) {
    return obj !== null && typeof obj === "object";
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
function isGeneralizedObject(obj) {
    const dataType = typeof obj;
    return obj !== null && (dataType === "object" || dataType === "function");
}
/**
 * @author oliver lou
 * @Date 2022-08-26 10:01:38
 * @description 判断是不是一个狭义的对象
 * @return {*}
 */
function isNarrowObject(obj) {
    if (getDataTypeof(obj) === "object") {
        return true;
    }
    else {
        return false;
    }
}
/**
 * @author oliver lou
 * @Date 2022-08-25 11:09:34
 * @description 判断一个对象是不是一个空对象
 * @param {*} obj
 * @return {*}
 */
const isEmptyObject = (obj) => {
    if (!isNarrowObject(obj)) {
        throw new TypeError(notNarrowObjectErrorMessage);
    }
    return Object.keys(obj).length === 0;
};
/**
 * @author oliver lou
 * @Date 2024-08-01 12:01:29
 * @description 判断一个函数是不是async函数
 * @param {Function} fn
 * @return {*}
 */
function isAsyncFunction(fn) {
    return fn[Symbol.toStringTag] === 'AsyncFunction';
}
/**
 * @author oliver lou
 * @Date 2024-08-01 12:02:18
 * @description 判断是不是一个类Promise
 * @param {*} value
 * @return {*}
 */
function isPromiseLike(value) {
    return (value !== null &&
        (typeof value === 'object' || typeof value === 'function') &&
        typeof value.then === 'function');
}

// 日期相关的函数
/**
 * @author oliver lou
 * @Date 2022-12-15 17:29:23
 * @description 检查Date对象是否为有效的Date对象，不为Invalid Date
 * @return { boolean }
 */
function isValidDate(date) {
    return date instanceof Date && !Number.isNaN(date.getTime());
}
// 判断连个日期是否为同一天
function isSameDay(dateFirst, dateSecord) {
    const date1 = new Date(dateFirst);
    const date2 = new Date(dateSecord);
    const day1 = date1.getDay();
    const day2 = date2.getDay();
    if (Number.isNaN(day1) || Number.isNaN(day2)) {
        throw new TypeError('Invalid Date');
    }
    const result = day1 - day2;
    if (result === 0) {
        return true; // 是同一天
    }
    else {
        return false;
    }
}
/**
 * @author oliver lou
 * @Date 2022-09-19 11:16:31
 * @description 判断是否是火车票预定时间
 * @return {*}
 */
function isTrainOrderTicketTime() {
    const now = new Date();
    // const now = new Date('2022-09-19 04:00:00')
    const hour = now.getHours();
    const minute = now.getMinutes();
    const weekDay = now.getDay();
    if (weekDay === 2) {
        if (hour >= 5 && (hour < 23 || (hour === 23 && minute < 25))) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        if (hour >= 5 || (hour === 0 && minute < 55)) {
            return true;
        }
        else {
            return false;
        }
    }
}

/**
 * @Description: 用于表单校验的函数
 * @Author: oliver lou

 * @Date: 2020-11-18 17:08:29
 * @Param: 无
*/
const ipReg = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|[1-9])\.((([0-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))))\.((([0-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))))\.((([0-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))))$/;
const domainReg = /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/;
const charReg = /[a-zA-Z]+/;
/**
 * @Description: 校验单IP的情形
 * @Author: oliver lou

 * @Date: 2020-10-15 14:16:55
 * @Param: 无
*/
function checkSingleIp(rule, value, callback) {
    if (!value) {
        callback();
        return;
    }
    if (!ipReg.test(value)) {
        callback('请输入正确的IP地址');
    }
    callback();
}
/**
 * @Description: 检查名称，只能输入字母和数字，以逗号分隔
 * @Author: oliver lou

 * @Date: 2020-08-24 10:44:28
 * @Param: 无
*/
function checkNames(rule, value, callback) {
    // 什么都没有输入，就直接返回,如果不写会导致validateFields函数失效
    if (!value) {
        callback();
        return;
    }
    const nameArr = value.split('\n');
    // console.log(nameArr);
    const nameRegExp = /^(?!_)\w+$/;
    const blankRegExp = /\s/;
    // console.log(nameArr);
    for (const item of nameArr) {
        if (blankRegExp.test(item)) {
            callback('不能输入空格字符');
            return;
        }
        if (!nameRegExp.test(item)) {
            callback('只能输入英文和数字！');
            return;
        }
        callback();
    }
    callback();
}
/**
 * 校验IP、IP段
 */
//
// 192.168.1.1
// 192.168.1.0/24
// 192.168.1.1-192.168.1.50
//
function checkIp(rule, value, callback) {
    if (!value) {
        callback();
        return;
    }
    // 如果有 - ，分开校验
    if (value.indexOf('-') > -1) {
        const ips = value.split('-');
        for (let i = 0; i < ips.length; i++) {
            if (!ipReg.test(ips[i])) {
                callback('请输入正确的IP/IP段。例，192.168.1.1-192.168.1.50');
                return true;
            }
        }
        // 校验前后2个ip的大小关系
        const ip1Number = ip2number(ips[0]);
        const ip2Number = ip2number(ips[1]);
        if (ip1Number >= ip2Number) {
            callback('网段截止IP必须大于网段起始IP');
        }
    }
    else if (value.indexOf('/') > -1) {
        const ips = value.split('/');
        // 校验第一个 ip
        if (!ipReg.test(ips[0])) {
            callback('请输入正确的IP/IP段。例，192.168.1.0/24');
        }
        // 校验子网掩码
        const subnetMask = ips[1];
        if (!subnetMask || isNaN(subnetMask) || subnetMask.startsWith('0')) {
            callback('子网掩码范围是(0,32]。例，192.168.1.0/24');
        }
        // console.log(subnetMask);
        // 这里把 0 排除掉
        if (+subnetMask <= 0 || +subnetMask > 32) {
            callback('子网掩码范围是(0,32]。例，192.168.1.0/24');
        }
    }
    else if (!ipReg.test(value)) {
        callback('请输入正确的IP/IP段');
    }
    callback();
}
/**
 * @Description: 校验服务器地址
 * @Author: oliver lou

 * @Date: 2020-09-03 14:16:54
 * @Param: 无
*/
function checkAddress(rule, value, callback) {
    // 校验ip地址
    const ipReg = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|[1-9])\.((([0-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))))\.((([0-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))))\.((([0-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))))$/;
    if (!value) {
        callback();
        return;
    }
    if (!ipReg.test(value)) {
        callback('请输入正确的IP地址');
    }
    callback();
}
/**
 * @Description: 校验服务器端口
 * @Author: oliver lou

 * @Date: 2020-09-03 14:26:44
 * @Param: 无
*/
function checkDomain(rule, value, callback) {
    if (!value) {
        callback();
        return;
    }
    if (!domainReg.test(value)) {
        callback('请输入正确的域名');
    }
    callback();
}
/**
 * @Description: 校验IP或者域名
 * @Author: oliver lou

 * @Date: 2020-11-18 17:16:40
 * @Param: 无
*/
function checkIpOrDomain(rule, value, callback) {
    if (!value) {
        callback();
        return;
    }
    // let flag = false;
    if (charReg.test(value)) {
        if (!domainReg.test(value)) {
            callback('请输入正确的IP/域名');
        }
    }
    else {
        if (!ipReg.test(value)) {
            callback('请输入正确的IP/域名');
        }
    }
    callback();
}
// 校验手机号
function checkPhone(rule, value, callback) {
    const blank = /^\S*$/;
    //手机号校验
    const phone = /^1(3|4|5|6|7|8|9)\d{9}$/;
    if (!value) {
        callback();
        return;
    }
    if (!blank.test(value)) {
        callback('不能输入空格');
    }
    if (!phone.test(value)) {
        callback('请输入正确手机号');
    }
    callback();
}
/**
 * @Description: 校验MAC地址
 * @Author: oliver lou

 * @Date: 2020-09-24 16:21:26
 * @Param: 无
*/
function checkMAC(rule, value, callback) {
    // const MACReg = /[A-Fa-f0-9]{2}[:-][A-Fa-f0-9]{2}[:-][A-Fa-f0-9]{2}[:-][A-Fa-f0-9]{2}[:-][A-Fa-f0-9]{2}[:-][A-Fa-f0-9]{2}/;
    const MACReg = /^((([a-f0-9]{2}:){5}[a-f0-9]{2})|(([a-f0-9]{2}-){5}[a-f0-9]{2})|(([a-f0-9]{2}){6}))$/gi;
    const blank = /^\S*$/;
    if (!value) {
        callback();
        return;
    }
    if (!blank.test(value)) {
        callback('不能输入空格');
    }
    if (!MACReg.test(value)) {
        callback('请输入正确的MAC地址');
    }
    callback();
}
/**
 * @Description: 检查Input框输入一定范围整数的问题
 * @Author: oliver lou

 * @Date: 2020-10-16 14:29:08
 * @Param: 无
*/
function checkRangeInt(min, max) {
    // console.log(rule);
    return function (rule, value, callback) {
        // console.log(value);
        const isIntWithoutZero = (numString) => {
            // 一位数的情况
            // if (numString.length === 1) {
            //     const singleNumberReg = /^[1-9]$/g;
            //     if (!singleNumberReg.test(numString)) {
            //         return false
            //     }
            //     return true;
            // } else { // 多位数的情况
            //     const numberReg = /^[1-9](\d)+$/g;
            //     if (!numberReg.test(numString)) {
            //         return false;
            //     } else {
            //         const num = +numString;
            //         // console.log(num);
            //         if (num < min || num > max) {
            //             return false
            //         }
            //         return true;
            //     }
            // }
            // 要考虑是一位数的情况，所以用*，而不用+
            const numberReg = /^[1-9](\d)*$/g;
            if (!numberReg.test(numString)) {
                return false;
            }
            else {
                const num = +numString;
                // console.log(num);
                if (num < min || num > max) {
                    return false;
                }
                return true;
            }
        };
        // 考虑value为字符串的情形
        if (value === 0 || value === '0') {
            callback('首位不能输入0');
            return;
        }
        if (!value) {
            callback();
            return;
        }
        if (value) {
            // console.log(value);
            if (!isIntWithoutZero(value.toString())) {
                // const res = isInt(value.toString());
                // console.log(res);
                callback(`只允许输入数字[${min}-${max}]`);
            }
        }
        callback();
    };
}
// 检查邮箱（包含单邮箱和多邮箱的情况）
function checkPostbox(rule, value, callback) {
    const blank = /^\S*$/;
    //邮箱校验
    const postbox = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/;
    // 多邮箱校验
    const multiPostbox = /^((([A-z0-9_\.-]+)@([\dA-z\.-]+)\.([A-z\.]{2,6}\;))*(([A-z0-9_\.-]+)@([\dA-z\.-]+)\.([A-z\.]{2,6})))$/;
    if (!value) {
        callback();
        return;
    }
    if (!blank.test(value)) {
        callback('不能输入空格');
        return;
    }
    if (!postbox.test(value) && !multiPostbox.test(value)) {
        callback('请输入正确的邮箱格式，如果存在多条，请以英文分号分隔！');
    }
    callback();
}
// 检查单邮箱
function checkEmail(rule, value, callback) {
    const blank = /^\S*$/;
    const postbox = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/;
    if (!value) {
        callback();
        return;
    }
    if (!blank.test(value)) {
        callback('不能输入空格！');
        return;
    }
    if (!postbox.test(value)) {
        callback('请输入正确的邮箱格式！');
    }
    callback();
}
function checkBlank(rule, value, callback) {
    const blank = /^\S*$/;
    if (!value) {
        callback();
        return;
    }
    if (!blank.test(value)) {
        callback('不能输入空格');
        return;
    }
    callback();
}
/**
 * @Description: 检查antd的Cascader组件，Cascader组件会返回一个数组，因此会使`required:true`的校验失效
 * @Author: oliver lou

 * @Date: 2020-10-16 10:22:18
 * @Param: 无
*/
function checkCascader(rule, value, callback) {
    // 数组的值，当新增的时候为undefined，编辑的时候为''
    // console.log(value);
    if (value.some((item) => !item)) {
        callback('不能为空');
    }
    callback();
}

function add(num1, num2) {
    if (isString(num1) && isString(num2)) {
        // 大数相加
        const maxLength = Math.max(num1.length, num2.length);
        // num1和num2位数对齐，位数较小的前面补0
        num1 = num1.padStart(maxLength, '0');
        num2 = num2.padStart(maxLength, '0');
        let res = ''; // 存放最后得到的结果
        let figure = 0; // figure = 两个数字对应位数数值相加 + 进位
        let currentNum = 0; // 对应位数的结果
        let carry = 0; // 进位
        // 倒着循环
        for (let i = num1.length - 1; i >= 0; i--) {
            figure = parseInt(num1[i]) + parseInt(num2[i]) + carry;
            currentNum = figure % 10;
            carry = Math.floor(figure / 10);
            res = currentNum + res;
        }
        // 解决会最后会进一位的问题
        if (carry === 1) {
            res = '1' + res;
        }
        return res;
    }
    else if (isNumber(num1) && isNumber(num2)) {
        return num1 + num2;
    }
    else {
        throw new TypeError('需传入两个数字或两个字符串作为参数！');
    }
}

/**
 * @author oliver lou
 * @Date 2023-03-20 20:31:03
 * @description 去除字符串前后的空白符，兼容所有浏览器
 * @param {string} str
 * @return {*}
 */
function trim(str) {
    if (str && isString(str)) {
        return str.replace(/(^\s*)|(\s*)$/g, '');
    }
    else {
        return str;
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
function sliceByPoint(str, pStart, pEnd) {
    let result = '';
    let pIndex = 0; // 码点的指针
    let cIndex = 0; // 码元的指针
    while (true) {
        if (pIndex >= pEnd || cIndex >= str.length) {
            break;
        }
        const point = str.codePointAt(cIndex);
        if (pIndex >= pStart) {
            result += String.fromCodePoint(point);
        }
        pIndex++;
        cIndex += point > 0xffff ? 2 : 1;
    }
    return result;
}

/**
 * @author oliver lou
 * @Date 2023-03-20 20:52:02
 * @description 判断是不是一个类数组对象
 * @param {any} obj
 * @return {boolean}
 */
function isArrayLike(obj) {
    if (obj && // obj不是null、undefined、false、''、NaN、0
        typeof obj === 'object' && // obj是一个对象
        isFinite(obj.length) && // obj.length属性存在，且obj.length属性是一个有限数字
        obj.length >= 0 && // obj.length是一个非负数
        obj.length === Math.floor(obj.length) && // obj.length属性是一个整数
        obj.length < 4294967296 // obj.length属性小于2^32
    ) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * @author oliver lou
 * @Date 2023-03-20 21:33:21
 * @description 打乱数组（有副作用，直接更改原数组）
 * @param {Array} arr
 * @return {*}
 */
function shuffleArray(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let randomIndex = Math.floor(Math.random() * (len - i));
        let item = arr[randomIndex];
        arr[randomIndex] = arr[i];
        arr[i] = item;
    }
    return arr;
}

// --------------类型和枚举----------------------------
var Compare;
(function (Compare) {
    Compare[Compare["LESS_THAN"] = -1] = "LESS_THAN";
    Compare[Compare["BIGGER_THAN"] = 1] = "BIGGER_THAN";
    Compare[Compare["EQUALS"] = 0] = "EQUALS";
})(Compare || (Compare = {}));
// -----------------属性和常量-------------------------
const INF = Number.MAX_SAFE_INTEGER;
// ----------------函数和类-----------------------------
/**
 * @author oliver lou
 * @Date 2023-05-25 00:06:45
 * @description 基础版-判断一个数是否是质数（或称素数）
 * @param {number} num
 * @return {*}
 */
// export function isPrime(num: number): boolean {
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false
//     }
//   }
//   return true
// }
/**
 * @author oliver lou
 * @Date 2023-05-25 15:02:00
 * @description 优化版-判断一个数是否是质数（或称素数）
 * @param {number} num
 * @return {*}
 */
function isPrime(num) {
    // TODO: 还需要判断num必须为正整数
    let loopMax = Math.sqrt(num);
    if (num <= 1) {
        return false;
    }
    else {
        for (let i = 2; i <= loopMax; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}
/**
 * @author oliver lou
 * @Date 2023-05-24 01:12:02
 * @description 默认的比较函数
 * @param {T} a
 * @param {T} b
 * @return {*}
 */
function defaultCompare(a, b) {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
/**
 * @author oliver lou
 * @Date 2023-06-04 01:06:17
 * @description 栈的类
 * @return {*}
 */
class Stack {
    #count;
    #items;
    constructor() {
        this.#count = 0;
        this.#items = {};
    }
    /**
     * 向栈中添加一个元素
     * @parameter element 需要添加的元素
     * @return void
     */
    push(element) {
        this.#items[this.#count] = element;
        this.#count++;
    }
    size() {
        return this.#count;
    }
    peek() {
        // 我感觉其实不用判断是否为空
        return this.#items[this.#count - 1];
    }
    isEmpty() {
        return this.#count === 0;
    }
    /**
     * 删除栈中最上层的元素，并返回这个元素
     * 返回 T
     */
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        else {
            this.#count--;
            const result = this.#items[this.#count];
            delete this.#items[this.#count];
            return result;
        }
    }
    /**
     * 清空栈中的所有元素
     * 返回 void
     */
    clear() {
        this.#items = {};
        this.#count = 0;
    }
    /**
     * 将栈中的所有元素取出，并转化为字符串
     * 返回一个字符串
     */
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        else {
            let objString = `${this.#items[0]}`;
            for (let i = 1; i < this.#count; i++) {
                objString = `${objString},${this.#items[i]}`;
            }
            return objString;
        }
    }
    /**
     * 显示栈的所有元素
     * 返回一个对象
     */
    all() {
        return this.#items;
    }
}
/**
 * @author oliver lou
 * @Date 2023-05-24 00:13:02
 * @description 队列的类
 * @return {*}
 */
class Queue {
    #count;
    #lowestCount;
    #items;
    constructor() {
        this.#count = 0;
        this.#lowestCount = 0;
        this.#items = {};
    }
    /**
     * 向队列尾部添加一个（或多个）新的元素
     * 返回 void
     */
    enqueue(params) {
        if (Array.isArray(params)) {
            params.forEach((item) => {
                this.#items[this.#count] = item;
                this.#count++;
            });
        }
        else {
            this.#items[this.#count] = params;
            this.#count++;
        }
    }
    isEmpty() {
        return this.#count - this.#lowestCount === 0;
    }
    // isEmpty() {
    //   return this.size() === 0
    // }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        else {
            const result = this.#items[this.#lowestCount];
            delete this.#items[this.#lowestCount];
            this.#lowestCount++;
            return result;
        }
    }
    peek() {
        // 我感觉其实不用判断是否为空
        return this.#items[this.#lowestCount];
    }
    size() {
        return this.#count - this.#lowestCount;
    }
    clear() {
        this.#items = {};
        this.#count = 0;
        this.#lowestCount = 0;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        else {
            let objString = `${this.#items[this.#lowestCount]}`;
            for (let i = this.#lowestCount + 1; i < this.#count; i++) {
                objString = `${objString},${this.#items[i]}`;
            }
            return objString;
        }
    }
}
class LinkedListNode {
    value;
    next;
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
class BinaryTreeNode {
    value;
    left;
    right;
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class DoublyNode extends LinkedListNode {
    element;
    next;
    prev;
    constructor(element, next, prev) {
        super(element, next);
        this.element = element;
        this.next = next;
        this.prev = prev;
    }
}
function defaultEquals(a, b) {
    return a === b;
}
/**
 * @author oliver lou
 * @Date 2023-05-24 00:31:06
 * @description 链表类
 * @return {*}
 */
class LinkedList {
    equalsFn;
    #count = 0;
    #head;
    constructor(equalsFn = defaultEquals) {
        this.equalsFn = equalsFn;
    }
    /**
     * 向链表尾部添加一个新的元素
     * 返回 void
     */
    push(element) {
        const node = new LinkedListNode(element);
        let current;
        if (this.#head === null || this.#head === undefined) {
            // catches null && undefined
            this.#head = node;
        }
        else {
            current = this.#head;
            while (current.next !== null && current.next !== undefined) {
                current = current.next;
            }
            current.next = node;
        }
        this.#count++;
    }
    /**
     * 获取链表某个位置的元素
     */
    getElementAt(index) {
        if (index >= 0 && index <= this.#count) {
            let node = this.#head;
            for (let i = 0; i < index && node !== null && node !== undefined; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
    /**
     * 在任意位置插入元素
     */
    insert(element, index) {
        if (index >= 0 && index <= this.#count) {
            const node = new LinkedListNode(element);
            if (index === 0) {
                const current = this.#head;
                node.next = current;
                this.#head = node;
            }
            else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.#count++;
            return true;
        }
        return false;
    }
    removeAt(index) {
        if (index >= 0 && index < this.#count) {
            let current = this.#head;
            if (index === 0) {
                this.#head = current.next;
            }
            else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.#count--;
            return current.value;
        }
        return undefined;
    }
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    indexOf(element) {
        let current = this.#head;
        for (let i = 0; i < this.size() && current !== null && current !== undefined; i++) {
            if (this.equalsFn(element, current.value)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return this.#count;
    }
    getHead() {
        return this.#head;
    }
    clear() {
        this.#head = undefined;
        this.#count = 0;
    }
    toString() {
        if (this.#head == null) {
            return '';
        }
        let objString = `${this.#head.value}`;
        let current = this.#head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString},${current.value}`;
            current = current.next;
        }
        return objString;
    }
    /**
     * 循环遍历链表
     */
    traversal(callback) {
        let temp = this.#head;
        // 用于计数
        let i = 0;
        while (true) {
            if (temp !== null && temp !== undefined) {
                callback(temp.value, i);
            }
            else {
                break;
            }
            temp = temp.next;
            i = i + 1;
        }
    }
}
/**
 * @author oliver lou
 * @Date 2023-05-24 01:10:27
 * @description 有序链表
 * @return {*}
 */
class SortedLinkedList extends LinkedList {
    equalsFn;
    compareFn;
    #head;
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.equalsFn = equalsFn;
        this.compareFn = compareFn;
    }
    push(element) {
        if (this.isEmpty()) {
            super.push(element);
        }
        else {
            const index = this.getIndexNextSortedElement(element);
            super.insert(element, index);
        }
    }
    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }
        index = this.getIndexNextSortedElement(element);
        return super.insert(element, index);
    }
    getIndexNextSortedElement(element) {
        let current = this.#head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.value);
            if (comp === Compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }
}
/**
 * @author oliver lou
 * @Date 2023-05-24 01:34:30
 * @description 自定义Set类，包含交集、并集、差集
 * @return {*}
 */
class CustomSet {
    items;
    constructor() {
        this.items = {};
    }
    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }
    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }
    has(element) {
        // return this.items.hasOwnProperty(element);
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }
    values() {
        return Object.values(this.items);
    }
    union(otherCustomSet) {
        const unionCustomSet = new CustomSet();
        this.values().forEach((value) => unionCustomSet.add(value));
        otherCustomSet.values().forEach((value) => unionCustomSet.add(value));
        return unionCustomSet;
    }
    intersection(otherCustomSet) {
        const intersectionCustomSet = new CustomSet();
        const values = this.values();
        const otherValues = otherCustomSet.values();
        let biggerCustomSet = values;
        let smallerCustomSet = otherValues;
        if (otherValues.length - values.length > 0) {
            biggerCustomSet = otherValues;
            smallerCustomSet = values;
        }
        smallerCustomSet.forEach((value) => {
            if (biggerCustomSet.includes(value)) {
                intersectionCustomSet.add(value);
            }
        });
        return intersectionCustomSet;
    }
    difference(otherCustomSet) {
        const differenceCustomSet = new CustomSet();
        this.values().forEach((value) => {
            if (!otherCustomSet.has(value)) {
                differenceCustomSet.add(value);
            }
        });
        return differenceCustomSet;
    }
    isSubsetOf(otherCustomSet) {
        if (this.size() > otherCustomSet.size()) {
            return false;
        }
        let isSubset = true;
        this.values().every((value) => {
            if (!otherCustomSet.has(value)) {
                isSubset = false;
                return false;
            }
            return true;
        });
        return isSubset;
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return Object.keys(this.items).length;
    }
    clear() {
        this.items = {};
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const values = this.values();
        let objString = `${values[0]}`;
        for (let i = 1; i < values.length; i++) {
            objString = `${objString},${values[i].toString()}`;
        }
        return objString;
    }
}
/**
 * @author oliver lou
 * @Date 2023-05-30 00:06:04
 * @description 数据结构-图
 * @return {*}
 */
class Graph {
    isDirected;
    // 存储图中所有顶点的名字
    vertices = [];
    // key的类型为字符串或数字，value的类型为字符串数组或数字数组
    // 使用定点的名字作为键，邻接顶点列表作为值
    adjList;
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.isDirected = isDirected;
        this.vertices = [];
        this.adjList = new Map();
    }
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjList.set(v, []); // initialize adjacency list with array as well;
        }
    }
    addEdge(a, b) {
        if (!this.adjList.get(a)) {
            this.addVertex(a);
        }
        if (!this.adjList.get(b)) {
            this.addVertex(b);
        }
        this.adjList.get(a).push(b);
        if (!this.isDirected) {
            this.adjList.get(b).push(a);
        }
        // adjList.get(w).push(v); //commented to run the improved DFS with topological sorting
    }
    getVertices() {
        return this.vertices;
    }
    getAdjList() {
        return this.adjList;
    }
    toString() {
        let s = '';
        for (let i = 0; i < this.vertices.length; i++) {
            s += this.vertices[i] + ' -> ';
            const neighbors = this.adjList.get(this.vertices[i]);
            for (let j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    }
}
/**
 * @author oliver lou
 * @Date 2023-06-20 17:02:52
 * @description 通用的柯里化的方法
 * @param {Function} fn
 * @param {array} args
 * @return {*}
 */
function curry(fn, ...args) {
    return (..._args) => {
        return fn(...args, ..._args);
    };
}
/**
 * @author oliver lou
 * @Date 2023-06-26 23:37:55
 * @description 二叉搜索树
 * @return {*}
 */
// 存在疑问：
// 1. 如果有相同的值怎么样,有些情况需要保证顺序如何处理？
// 2. 如果存不同类型的值怎么样？
class BinarySearchTree {
    root;
    compareFn;
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.root = undefined;
    }
    insert(value) {
        // special case: first value
        if (this.root == null) {
            this.root = new BinaryTreeNode(value);
        }
        else {
            this.insertNode(this.root, value);
        }
    }
    insertNode(node, value) {
        if (this.compareFn(value, node.value) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new BinaryTreeNode(value);
            }
            else {
                this.insertNode(node.left, value);
            }
        }
        else if (node.right == null) {
            node.right = new BinaryTreeNode(value);
        }
        else {
            this.insertNode(node.right, value);
        }
    }
    getRoot() {
        return this.root;
    }
    search(value) {
        return this.searchNode(this.root, value);
    }
    searchNode(node, value) {
        if (node == null) {
            return false;
        }
        if (this.compareFn(value, node.value) === Compare.LESS_THAN) {
            return this.searchNode(node.left, value);
        }
        else if (this.compareFn(value, node.value) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, value);
        }
        return true;
    }
    // 中序遍历
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }
    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.value);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
    // 前序遍历
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }
    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.value);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    // 后序遍历
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }
    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.value);
        }
    }
    // 获取值最小的节点
    min() {
        return this.minNode(this.root);
    }
    minNode(node) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }
    // 获取值最大的节点
    max() {
        return this.maxNode(this.root);
    }
    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }
    // 移除某个值
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }
    removeNode(node, value) {
        if (node == null) {
            return undefined;
        }
        if (this.compareFn(value, node.value) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, value);
            return node;
        }
        else if (this.compareFn(value, node.value) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, value);
            return node;
        }
        // value is equal to node.item
        // handle 3 special conditions
        // 1 - a leaf node
        // 2 - a node with only 1 child
        // 3 - a node with 2 children
        // case 1
        if (node.left == null && node.right == null) {
            node = undefined;
            return node;
        }
        // case 2
        if (node.left == null) {
            node = node.right;
            return node;
        }
        else if (node.right == null) {
            node = node.left;
            return node;
        }
        // case 3
        const aux = this.minNode(node.right);
        node.value = aux.value;
        node.right = this.removeNode(node.right, aux.value);
        return node;
    }
}

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
/**
 * @author oliver lou
 * @Date 2023-07-10 09:19:20
 * @description 格式化金额
 * @param {string} str
 * @return { string }
 */
const formatAccount = (str) => {
    const res = str.split('').reverse().join('');
    const reg = /(\d\d\d)(?=\B)/g;
    return res
        .replace(reg, (match) => {
        return match + ',';
    })
        .split('')
        .reverse()
        .join('');
};

// @ts-nocheck
// import { debounce as a } from 'lodash-es'
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
function ip2number(ip) {
    let numbers = ip.split(".");
    return (parseInt(numbers[0], 10) * 256 * 256 * 256 +
        parseInt(numbers[1], 10) * 256 * 256 +
        parseInt(numbers[2], 10) * 256 +
        parseInt(numbers[3], 10));
}
/**
 * @Description: 用于拼接多个className
 * @Author: oliver lou
 * @Date: 2020-09-02 16:44:39
 * @Param: 无
 */
const jointClassName = (arr) => {
    return arr.join(" ");
};
/**
 * @Description: 生成数字数组序列
 * @Author: oliver lou
 * @Date: 2020-09-24 15:44:05
 * @Param: 无
 */
const generateNumberList = (start, end) => {
    return Array.from(new Array(end + 1).keys()).slice(start);
};
/**
 * @Description: 空格变换行显示
 * @Author: oliver lou
 * @Date: 2020-09-29 14:27:22
 * @Param: 无
 */
function splitText(str) {
    if (!isString(str)) {
        return;
    }
    const textArr = str.replace(/,/g, "\n");
    return textArr;
}
/**
 * @Description: 判断一个对象所有的值是否都为假（经过隐式类型转换）
 * @Author: oliver lou
 * @Date: 2020-11-17 14:23:19
 * @Param: 无
 */
const isAllNull = (obj) => {
    if (!isObject(obj)) {
        throw new TypeError("请传一个对象作为参数");
    }
    else {
        return Object.values(obj).some((item) => item);
    }
};
/**
 * 对象转字符串参数
 * @param {Object} object
 * eg:
 * {a;1,b:2} => a=1&b=2
 */
function objectToParams(object) {
    if (!object || !typeof object === "object") {
        return "";
    }
    let paramsArr = [];
    for (let key in object) {
        let string = key + "=" + object[key];
        paramsArr.push(encodeURI(string));
    }
    return paramsArr.join("&");
}
/**
 * @Title: 防抖函数
 * @Author: oliver lou
 * @Date: 2021-03-03 14:18:41
 * @Description: 解决了参数传递及this指向绑定的问题
 */
function debounce(fn, ms) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, ms);
    };
}
/**
 * @Title: 函数节流
 * @Author: oliver lou
 * @Date: 2021-03-03 15:14:40
 * @Description: 解决了参数传递及this指向绑定的问题
 */
function throttle(fn, ms = 300) {
    let timer, startTime = new Date();
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        let currentTime = new Date();
        if (currentTime - startTime <= ms) {
            //小于等于规定时间间隔时，用setTimeout在指定时间后再执行
            timer = setTimeout(() => {
                fn.apply(this, arguments);
            }, ms);
        }
        else {
            //重新计时并执行函数
            startTime = currentTime;
            fn.apply(this, arguments);
        }
    };
}
/**
 * @Title: 自定义事件的实现
 * @Author: oliver lou
 * @Date: 2021-03-03 20:41:15
 * @Description: 无
 */
class CustomEvent {
    constructor() {
        this.handlers = {};
    }
    // 绑定事件处理函数
    on(eventName, listener) {
        if (this.handlers[eventName]) {
            this.handlers[eventName].push(listener);
        }
        else {
            let listeners = [];
            listeners.push(listener);
            this.handlers[eventName] = listeners;
        }
    }
    // 移除事件处理函数
    off(eventName, listener) {
        if (this.handlers[eventName]) {
            let index = this.handlers[eventName].indexOf(listener);
            if (index !== -1) {
                this.handlers[eventName].splice(index, 1);
                if (this.handlers[eventName].length === 0) {
                    delete this.handlers[eventName];
                }
            }
        }
    }
    // 执行某个事先处理函数
    once(eventName, listener) {
        if (this.handlers[eventName]) {
            let index = this.handlers[eventName].indexOf(listener);
            let flag, result;
            if (index !== -1) {
                this.handlers[eventName][index] = function () {
                    if (flag) {
                        return result;
                    }
                    result = listener.apply(this, arguments);
                    flag = true;
                };
            }
        }
    }
    // 触发某个事件的事件处理函数
    trigger(eventName) {
        if (this.handlers[eventName]) {
            for (let f of this.handlers[eventName]) {
                f();
            }
        }
        else {
            throw new Error("不存在该类型的事件");
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
function interval(fn, ms) {
    let obj = {
        timer: null,
        count: 0,
    };
    function _loop() {
        fn();
        obj.timer = setTimeout(_loop, ms);
        obj.count++;
    }
    setTimeout(_loop, ms);
    return obj;
}
/**
 * @author oliver lou
 * @Date 2021-04-14 14:24:31
 * @description 用于实现中文按照拼音排序，有可能会不准，因为中文存在多音字
 * @param { Array } arr
 * @return { Array }
 */
function localeCompare(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("需传入一个数组");
    }
    else {
        return arr.sort((item1, item2) => {
            return item1.localeCompare(item2);
        });
    }
}
/**
 * @author oliver lou
 * @Date 2021-04-15 11:29:39
 * @description 数组去重
 * @param {*} arr
 * @return {*}
 */
function unique(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("需传入一个数组");
    }
    else {
        return Array.from(new Set(arr));
    }
}
/**
 * @author oliver lou
 * @Date 2022-03-19 20:43:21
 * @description 将16进制字符串转为10进制数字
 * @param {*} str
 * @return {*} Number
 */
function transform16To10(str) {
    if (!isString(str)) {
        throw new TypeError(notStringErrorMessage);
    }
    return Number(`0x${str}`);
}
/**
 * @author oliver lou
 * @Date 2022-03-19 17:16:29
 * @description 将rbg颜色字符串转为matlab的颜色数组，如'#ff0000'转为[1,0,0]
 * @param {*} colorStr
 * @return {*} Array
 */
function transformRGBColorToMatlabColor(colorStr) {
    if (!isString(colorStr)) {
        throw new TypeError(notStringErrorMessage);
    }
    if (!colorStr.startsWith("#")) {
        throw new Error(`颜色字符串需以'#'开头`);
    }
    if (colorStr.length !== 7) {
        throw new Error("颜色字符串需为7位");
    }
    const r = transform16To10(colorStr.slice(1, 3));
    const g = transform16To10(colorStr.slice(3, 5));
    const b = transform16To10(colorStr.slice(5, 7));
    return [r / 255, g / 255, b / 255];
}
/**
 * @author oliver lou
 * @Date 2022-08-15 17:54:24
 * @description 将数字转换为大写金额
 * @return {*}
 */
function transformToAmountInWords(num) {
    if (num == "") {
        return "";
    }
    // 最大处理的数字
    let maxNum = Number.MAX_SAFE_INTEGER;
    if (num >= maxNum) {
        // 超出最大处理数字
        throw new Error(outOfNumberRange);
    }
    // 汉字的数字
    let cnNums = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
    // 基本单位
    let cnIntRadice = ["", "拾", "佰", "仟"];
    // 对应整数部分扩展单位
    let cnIntUnits = ["", "万", "亿", "兆"];
    // 对应小数部分单位
    let cnDecUnits = ["角", "分", "毫", "厘"];
    // 整数金额时后面跟的字符
    let cnInteger = "整";
    // 整型完以后的单位
    let cnIntLast = "元";
    // 金额整数部分
    let integerNum;
    // 金额小数部分
    let decimalNum;
    // 输出的中文金额字符串
    let chineseStr = "";
    // 分离金额后用的数组，预定义
    let parts;
    if (num == 0) {
        chineseStr = cnNums[0] + cnIntLast + cnInteger;
        return chineseStr;
    }
    // 转换为字符串
    num = num.toString();
    if (num.indexOf(".") == -1) {
        integerNum = num;
        decimalNum = "";
    }
    else {
        parts = num.split(".");
        integerNum = parts[0];
        decimalNum = parts[1].substr(0, 4);
    }
    // 获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
        let zeroCount = 0;
        let IntLen = integerNum.length;
        for (let i = 0; i < IntLen; i++) {
            let n = integerNum.substr(i, 1);
            let p = IntLen - i - 1;
            let q = p / 4;
            let m = p % 4;
            if (n == "0") {
                zeroCount++;
            }
            else {
                if (zeroCount > 0) {
                    chineseStr += cnNums[0];
                }
                // 归零
                zeroCount = 0;
                chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
            }
            if (m == 0 && zeroCount < 4) {
                chineseStr += cnIntUnits[q];
            }
        }
        chineseStr += cnIntLast;
    }
    // 小数部分
    if (decimalNum != "") {
        let decLen = decimalNum.length;
        for (let ii = 0; ii < decLen; ii++) {
            let nn = decimalNum.substr(ii, 1);
            if (nn != "0") {
                chineseStr += cnNums[Number(nn)] + cnDecUnits[ii];
            }
        }
    }
    if (chineseStr == "") {
        chineseStr += cnNums[0] + cnIntLast + cnInteger;
    }
    else if (decimalNum == "") {
        chineseStr += cnInteger;
    }
    return chineseStr;
}
/**
 * @author oliver lou
 * @Date 2022-08-29 08:53:44
 * @description 判断一个函数是不是原生的函数
 * @param {*} func
 * @return {boolean}
 */
function isNative(func) {
    return typeof func === "function" && /native code/.test(func.toString());
}
/**
 * @author oliver lou
 * @Date 2022-08-29 08:56:16
 * @description 创建一个__proto__为null的对象，并返回一个函数，检查某个key是否在这个对象中
 * @return {*}
 */
function makeMap(str, expectsLowerCase) {
    if (!isString(str)) {
        throw new TypeError(`第一个参数${notStringErrorMessage}`);
    }
    if (!isBoolean(str)) {
        throw new TypeError(`第二个参数${notBooleanErrorMessage}`);
    }
    let map = Object.create(null);
    let list = str.split(",");
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase
        ? function (val) {
            return map[val.toLowerCase()];
        }
        : function (val) {
            return map[val];
        };
}
/**
 * @author oliver lou
 * @Date 2024-08-01 11:50:52
 * @description 深度克隆，可以处理循环引用、DOM对象、Date对象、RegExp对象
 * @param {*} sourceObj
 * @return {*}
 */
function deepClone(sourceObj) {
    if (typeof sourceObj !== 'object')
        return;
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
function deepCloneByMessageChannel(obj) {
    return new Promise((resolve) => {
        const { port1, port2 } = new MessageChannel();
        port1.postMessage(obj);
        port2.onmessage = (msg) => {
            resolve(msg.data);
            // 如果不加这两行代码，在Node环境中会一直挂起，不会结束
            port1.close();
            port2.close();
        };
    });
}

// 处理兼容性相关工具函数
const inBrowser = typeof window !== "undefined";
let userAgent = "";
let ua = "";
if (inBrowser) {
    userAgent = navigator.userAgent;
    ua = userAgent.toLowerCase();
}
/**
 * @author oliver lou
 * @Date 2022-09-13 13:46:39
 * @description 判断是否是Edge浏览器
 * @return {*}
 */
function isEdgeBrowser() {
    return ua.indexOf("edge/") > 0 || ua.indexOf("edg/") > 0;
}
/**
 * @author oliver lou
 * @Date 2022-09-13 13:50:19
 * @description 判断是否是火狐浏览器
 * @return {*}
 */
// TODO:待测试
function isFireFoxBrowser() {
    return ua.match(/firefox\/(\d+)/);
}
/**
 * @author oliver lou
 * @Date 2022-07-11 15:34:22
 * @description 检测是否是Android浏览器环境，兼容Chrome Dev Tools
 * @return {*}
 */
function isAndroid() {
    return userAgent.indexOf("Android") > -1 || userAgent.indexOf("Adr") > -1;
}
/**
 * @author oliver lou
 * @Date 2022-07-11 15:34:48
 * @description 检测是否是iOS浏览器环境，兼容Chrome Dev Tools
 * @return {*}
 */
function isiOS() {
    return !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
/**
 * @author oliver lou
 * @Date 2022-09-07 18:36:41
 * @description 判断是否是微信浏览器环境
 * @return {*}
 */
function isWeChatBrowser() {
    if (ua.match(/micromessenger/i)) {
        return true;
    }
    else {
        return false;
    }
}
/**
 * @author oliver lou
 * @Date 2022-09-07 18:36:53
 * @description 判断是否是企业微信浏览器环境
 * @return {*}
 */
function isEnterpriseWeChatBrowser() {
    if (ua.indexOf("wxwork") > 0) {
        return true;
    }
    else {
        return false;
    }
}
/**
 * @author oliver lou
 * @Date 2022-09-07 18:37:33
 * @description 判断是否是支付宝浏览器环境
 * @return {*}
 */
function isAlipayBrowser() {
    if (ua.indexOf("alipay") > 0) {
        return true;
    }
    else {
        return false;
    }
}
/**
 * @author oliver lou
 * @Date 2022-09-07 18:40:05
 * @description 判断是否是钉钉浏览器环境
 * @return {*}
 */
function isDingTalkBrowser() {
    if (ua.indexOf("dingtalk") > 0) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * @author oliver lou
 * @Date 2024-08-01 12:25:20
 * @description 自动重试的fetch，主要是为了过渡后端服务更新
 * @param {string} url
 * @param {object} data
 * @return {*}
 */
function fetchRetry(url, data) {
    let max = 3;
    const resquest = async () => {
        let response;
        try {
            response = await fetch(url, { method: 'POST', body: JSON.stringify(data) });
            if (response.status !== 200 && max > 0) {
                max--;
                return await retry();
            }
            else {
                return response;
            }
        }
        catch (e) {
            if (max > 0) {
                max--;
                return await retry();
            }
            return e;
        }
    };
    const retry = () => {
        return new Promise((resolve) => {
            setTimeout(async () => {
                const response = await resquest();
                resolve(response);
            }, 1000);
        });
    };
    return resquest();
}
/**
 * @author oliver lou
 * @Date 2024-08-01 12:32:33
 * @description 创建fetchRetry实例
 * @param {number} max
 * @param {number} ms
 * @return {*}
 */
function createFetchRetry(max, ms, errorStatusArr) {
    return (url, init) => {
        const resquest = async () => {
            let response;
            try {
                response = await fetch(url, init);
                if (errorStatusArr.includes(response.status) && max > 0) {
                    max--;
                    return await retry();
                }
                else {
                    return response;
                }
            }
            catch (e) {
                if (max > 0) {
                    max--;
                    return await retry();
                }
                return e;
            }
        };
        const retry = () => {
            return new Promise((resolve) => {
                setTimeout(async () => {
                    const response = await resquest();
                    resolve(response);
                }, ms);
            });
        };
        return resquest();
    };
}
/**
 * @author oliver lou
 * @Date 2024-08-01 17:36:04
 * @description 并发请求
 * @param {*} urls 待请求的url数组
 * @param {*} maxNum 最大并发数
 * @return {*}
 */
function limitedRequest(urls, maxNum) {
    return new Promise((resolve) => {
        const len = urls.length;
        if (!Array.isArray(urls) || len === 0) {
            resolve([]);
            return;
        }
        const result = [];
        let index = 0; // 下一个请求的下标
        let finishedCount = 0; // 当前请求完成的数量
        async function request() {
            if (index === len) {
                return;
            }
            const currentIndex = index;
            const url = urls[index];
            index++;
            try {
                const resp = await fetch(url);
                result[currentIndex] = resp;
            }
            catch (err) {
                result[currentIndex] = err;
            }
            finally {
                // 判断所有请求是否都已完成
                finishedCount++;
                if (finishedCount === len) {
                    resolve(result);
                    return;
                }
                request();
            }
        }
        const times = Math.min(len, maxNum);
        for (let i = 0; i < times; i++) {
            request();
        }
    });
}
/**
 * @author oliver lou
 * @Date 2024-08-01 18:36:23
 * @description 创建并发请求实例，用于处理其他异步方法，比如执行sql语句
 * @return {*}
 */
function createLimitedRequest(asyncFunc) {
    return (urls, maxNum) => {
        return new Promise((resolve) => {
            const len = urls.length;
            if (!Array.isArray(urls) || len === 0) {
                resolve([]);
                return;
            }
            const result = [];
            let index = 0; // 下一个请求的下标
            let finishedCount = 0; // 当前请求完成的数量
            async function request() {
                if (index === len) {
                    return;
                }
                const currentIndex = index;
                const url = urls[index];
                index++;
                try {
                    const resp = await asyncFunc(url);
                    result[currentIndex] = resp;
                }
                catch (err) {
                    result[currentIndex] = err;
                }
                finally {
                    // 判断所有请求是否都已完成
                    finishedCount++;
                    if (finishedCount === len) {
                        resolve(result);
                        return;
                    }
                    request();
                }
            }
            const times = Math.min(len, maxNum);
            for (let i = 0; i < times; i++) {
                request();
            }
        });
    };
}

export { BinarySearchTree, BinaryTreeNode, Compare, CustomEvent, CustomSet, DoublyNode, Graph, INF, LinkedList, LinkedListNode, Queue, SortedLinkedList, Stack, add, checkAddress, checkBlank, checkCascader, checkDomain, checkEmail, checkIp, checkIpOrDomain, checkMAC, checkNames, checkPhone, checkPostbox, checkRangeInt, checkSingleIp, createFetchRetry, createLimitedRequest, curry, debounce, deepClone, deepCloneByMessageChannel, defaultCompare, defaultEquals, fetchRetry, formatAccount, generateNumberList, getDataTypeof, getRandomInt, inBrowser, interval, ip2number, isAlipayBrowser, isAllNull, isAndroid, isArray$1 as isArray, isArrayLike, isAsyncFunction, isBoolean, isDingTalkBrowser, isEdgeBrowser, isEmptyObject, isEnterpriseWeChatBrowser, isFireFoxBrowser, isGeneralizedObject, isNarrowObject, isNative, isNumber, isObject$1 as isObject, isPrime, isPromiseLike, isSameDay, isString, isSymbol, isTrainOrderTicketTime, isValidDate, isWeChatBrowser, isiOS, jointClassName, limitedRequest, localeCompare, log, makeMap, objectToParams, removeNullString, shuffleArray, sliceByPoint, splitText, throttle, transform16To10, transformRGBColorToMatlabColor, transformToAmountInWords, trim, unique };
