/**
 * @author oliver lou
 * @Date 2020-09-29 14:30:37
 * @description 判断传入的值是不是一个布尔值
 * @param {any} boolean
 * @return {*}
 */
export declare function isBoolean(bool: any): bool is boolean;
/**
 * @author oliver lou
 * @Date 2020-09-29 14:30:37
 * @description 判断传入的值是不是一个数字
 * @param {any} num
 * @return {*}
 */
export declare function isNumber(num: any): num is number;
/**
 * @author oliver lou
 * @Date 2020-09-29 14:30:37
 * @description 判断传入的值是不是一个字符串
 * @param {any} str
 * @return {*}
 */
export declare function isString(str: any): str is string;
/**
 * @author oliver lou
 * @Date 2022-11-28 16:55:21
 * @description 判断传入的值是不是一个symbol
 * @return {*}
 */
export declare function isSymbol(symbols: any): symbols is symbol;
/**
 * @author oliver lou
 * @Date 2022-07-15 16:48:25
 * @description 检查传入的值是不是一个数组
 * @param {*} data
 * @return {*}
 */
export declare function isArray(data: any): data is any[];
/**
 * @author oliver lou
 * @Date 2022-08-08 20:25:49
 * @description 获取JS数据类型，返回一个语义化的字符串
 * @param {any} data
 * @return {*}
 */
export declare function getDataTypeof(data: any): string;
/**
 * @author oliver lou
 * @Date 2021-03-02 22:55:23
 * @description 检查传入的值是不是一个对象
 * @param {*} obj
 * @return {boolean}
 */
export declare function isObject(obj: any): obj is object;
/**
 * @author oliver lou
 * @Date 2022-08-29 11:01:52
 * @description 检查传入的值是不是一个广义的对象
 * @param {*} obj
 * @return {boolean}
 */
export declare function isGeneralizedObject(obj: any): boolean;
/**
 * @author oliver lou
 * @Date 2022-08-26 10:01:38
 * @description 判断是不是一个狭义的对象
 * @return {*}
 */
export declare function isNarrowObject(obj: any): boolean;
/**
 * @author oliver lou
 * @Date 2022-08-25 11:09:34
 * @description 判断一个对象是不是一个空对象
 * @param {*} obj
 * @return {*}
 */
export declare const isEmptyObject: (obj: any) => boolean;
/**
 * @author oliver lou
 * @Date 2024-08-01 12:01:29
 * @description 判断一个函数是不是async函数
 * @param {Function} fn
 * @return {*}
 */
export declare function isAsyncFunction(fn: Function): boolean;
/**
 * @author oliver lou
 * @Date 2024-08-01 12:02:18
 * @description 判断是不是一个类Promise
 * @param {*} value
 * @return {*}
 */
export declare function isPromiseLike(value: any): boolean;
