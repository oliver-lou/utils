export { getRandomInt, removeNullString, log } from "./utils";
export * from "./checkDataType";
export * from "./date";
export { checkSingleIp, checkNames, checkIp, checkAddress, checkDomain, checkIpOrDomain, checkPhone, checkMAC, checkRangeInt, checkPostbox, checkEmail, checkBlank, checkCascader, } from "./validate";
export * from './number';
export * from './string';
export * from './object';
export * from './array';
export * from './algorithm';
export { formatAccount } from './regExp';
/**
 * ip 转成数字
 * @param {*} ip
 */
export declare function ip2number(ip: any): number;
/**
 * @Description: 用于拼接多个className
 * @Author: oliver lou
 * @Date: 2020-09-02 16:44:39
 * @Param: 无
 */
export declare const jointClassName: (arr: any) => any;
/**
 * @Description: 生成数字数组序列
 * @Author: oliver lou
 * @Date: 2020-09-24 15:44:05
 * @Param: 无
 */
export declare const generateNumberList: (start: any, end: any) => number[];
/**
 * @Description: 空格变换行显示
 * @Author: oliver lou
 * @Date: 2020-09-29 14:27:22
 * @Param: 无
 */
export declare function splitText(str: any): string;
/**
 * @Description: 判断一个对象所有的值是否都为假（经过隐式类型转换）
 * @Author: oliver lou
 * @Date: 2020-11-17 14:23:19
 * @Param: 无
 */
export declare const isAllNull: (obj: any) => boolean;
/**
 * 对象转字符串参数
 * @param {Object} object
 * eg:
 * {a;1,b:2} => a=1&b=2
 */
export declare function objectToParams(object: any): string;
/**
 * @Title: 防抖函数
 * @Author: oliver lou
 * @Date: 2021-03-03 14:18:41
 * @Description: 解决了参数传递及this指向绑定的问题
 */
export declare function debounce(fn: any, ms: any): () => void;
/**
 * @Title: 函数节流
 * @Author: oliver lou
 * @Date: 2021-03-03 15:14:40
 * @Description: 解决了参数传递及this指向绑定的问题
 */
export declare function throttle(fn: any, ms?: number): () => void;
/**
 * @Title: 自定义事件的实现
 * @Author: oliver lou
 * @Date: 2021-03-03 20:41:15
 * @Description: 无
 */
export declare class CustomEvent {
    constructor();
    on(eventName: any, listener: any): void;
    off(eventName: any, listener: any): void;
    once(eventName: any, listener: any): void;
    trigger(eventName: any): void;
}
/**
 * @Title: 使用setTimeout模拟setInterval
 * @Author: oliver lou
 * @Date: 2021-03-03 21:39:55
 * @Description: 封装的用setInterval模拟setTimeout，并且可以清除，并实现简单的计数，获取计数读取res.count的值，清除定时器使用clearTimeout(res.timer);
 */
export declare function interval(fn: any, ms: any): {
    timer: any;
    count: number;
};
/**
 * @author oliver lou
 * @Date 2021-04-14 14:24:31
 * @description 用于实现中文按照拼音排序，有可能会不准，因为中文存在多音字
 * @param { Array } arr
 * @return { Array }
 */
export declare function localeCompare(arr: any): any[];
/**
 * @author oliver lou
 * @Date 2021-04-15 11:29:39
 * @description 数组去重
 * @param {*} arr
 * @return {*}
 */
export declare function unique(arr: any): any[];
/**
 * @author oliver lou
 * @Date 2022-03-19 20:43:21
 * @description 将16进制字符串转为10进制数字
 * @param {*} str
 * @return {*} Number
 */
export declare function transform16To10(str: any): number;
/**
 * @author oliver lou
 * @Date 2022-03-19 17:16:29
 * @description 将rbg颜色字符串转为matlab的颜色数组，如'#ff0000'转为[1,0,0]
 * @param {*} colorStr
 * @return {*} Array
 */
export declare function transformRGBColorToMatlabColor(colorStr: any): number[];
/**
 * @author oliver lou
 * @Date 2022-08-15 17:54:24
 * @description 将数字转换为大写金额
 * @return {*}
 */
export declare function transformToAmountInWords(num: number | string): string;
/**
 * @author oliver lou
 * @Date 2022-08-29 08:53:44
 * @description 判断一个函数是不是原生的函数
 * @param {*} func
 * @return {boolean}
 */
export declare function isNative(func: Function): boolean;
/**
 * @author oliver lou
 * @Date 2022-08-29 08:56:16
 * @description 创建一个__proto__为null的对象，并返回一个函数，检查某个key是否在这个对象中
 * @return {*}
 */
export declare function makeMap(str: string, expectsLowerCase: boolean): Function;
/**
 * @author oliver lou
 * @Date 2024-08-01 11:50:52
 * @description 深度克隆，可以处理循环引用、DOM对象、Date对象、RegExp对象
 * @param {*} sourceObj
 * @return {*}
 */
export declare function deepClone<T>(sourceObj: T): T;
/**
 * @author oliver lou
 * @Date 2024-08-01 11:58:08
 * @description 通过MessageChannel实现深度克隆，可以处理循环引用，但不支持克隆DOM对象
 * @param {*} obj
 * @return {*}
 */
export declare function deepCloneByMessageChannel<T>(obj: T): T;
