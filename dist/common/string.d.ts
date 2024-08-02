/**
 * @author oliver lou
 * @Date 2023-03-20 20:31:03
 * @description 去除字符串前后的空白符，兼容所有浏览器
 * @param {string} str
 * @return {*}
 */
export declare function trim(str: string): string;
/**
 * @author oliver lou
 * @Date 2024-08-01 12:14:42
 * @description 使用码点切割文字，主要是为了解决一些特殊文字占两个码元的问题
 * @param {string} str
 * @param {number} pStart
 * @param {number} pEnd
 * @return {*}
 */
export declare function sliceByPoint(str: string, pStart: number, pEnd: number): string;
