/**
 * @author oliver lou
 * @Date 2024-08-01 12:25:20
 * @description 自动重试的fetch，主要是为了过渡后端服务更新
 * @param {string} url
 * @param {object} data
 * @return {*}
 */
export declare function fetchRetry(url: string, data: object): Promise<any>;
/**
 * @author oliver lou
 * @Date 2024-08-01 12:32:33
 * @description 创建fetchRetry实例
 * @param {number} max
 * @param {number} ms
 * @return {*}
 */
export declare function createFetchRetry(max: number, ms: number, errorStatusArr: number[]): (url: string, init: object) => Promise<any>;
/**
 * @author oliver lou
 * @Date 2024-08-01 17:36:04
 * @description 并发请求
 * @param {*} urls 待请求的url数组
 * @param {*} maxNum 最大并发数
 * @return {*}
 */
export declare function limitedRequest(urls: string[], maxNum: number): Promise<any>;
/**
 * @author oliver lou
 * @Date 2024-08-01 18:36:23
 * @description 创建并发请求实例，用于处理其他异步方法，比如执行sql语句
 * @return {*}
 */
export declare function createLimitedRequest(asyncFunc: Function): (urls: string[], maxNum: number) => Promise<any>;
