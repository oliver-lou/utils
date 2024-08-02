/**
 * @Description: 校验单IP的情形
 * @Author: oliver lou

 * @Date: 2020-10-15 14:16:55
 * @Param: 无
*/
export declare function checkSingleIp(rule: any, value: any, callback: any): void;
/**
 * @Description: 检查名称，只能输入字母和数字，以逗号分隔
 * @Author: oliver lou

 * @Date: 2020-08-24 10:44:28
 * @Param: 无
*/
export declare function checkNames(rule: any, value: any, callback: any): void;
/**
 * 校验IP、IP段
 */
export declare function checkIp(rule: any, value: any, callback: any): boolean;
/**
 * @Description: 校验服务器地址
 * @Author: oliver lou

 * @Date: 2020-09-03 14:16:54
 * @Param: 无
*/
export declare function checkAddress(rule: any, value: any, callback: any): void;
/**
 * @Description: 校验服务器端口
 * @Author: oliver lou

 * @Date: 2020-09-03 14:26:44
 * @Param: 无
*/
export declare function checkDomain(rule: any, value: any, callback: any): void;
/**
 * @Description: 校验IP或者域名
 * @Author: oliver lou

 * @Date: 2020-11-18 17:16:40
 * @Param: 无
*/
export declare function checkIpOrDomain(rule: any, value: any, callback: any): void;
/**
 * @author oliver lou
 * @Date 2022-08-04 14:52:46
 * @description 校验手机号的正则表达式
 * @return {*}
 */
export declare const phoneRegExp: RegExp;
export declare function checkPhone(rule: any, value: any, callback: any): void;
/**
 * @Description: 校验MAC地址
 * @Author: oliver lou

 * @Date: 2020-09-24 16:21:26
 * @Param: 无
*/
export declare function checkMAC(rule: any, value: any, callback: any): void;
/**
 * @Description: 检查Input框输入一定范围整数的问题
 * @Author: oliver lou

 * @Date: 2020-10-16 14:29:08
 * @Param: 无
*/
export declare function checkRangeInt(min: any, max: any): (rule: any, value: any, callback: any) => void;
export declare function checkPostbox(rule: any, value: any, callback: any): void;
export declare function checkEmail(rule: any, value: any, callback: any): void;
export declare function checkBlank(rule: any, value: any, callback: any): void;
/**
 * @Description: 检查antd的Cascader组件，Cascader组件会返回一个数组，因此会使`required:true`的校验失效
 * @Author: oliver lou

 * @Date: 2020-10-16 10:22:18
 * @Param: 无
*/
export declare function checkCascader(rule: any, value: any, callback: any): void;
