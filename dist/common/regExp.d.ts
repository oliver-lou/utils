/**
 * @author oliver lou
 * @Date 2022-04-28 14:26:43
 * @description 检查是否是一个移动电话号
 * @param {*} value
 * @return {*}
 */
export declare const mobilePhoneNumberRegExp: RegExp;
export declare function isMobilePhoneNumber(value: any): boolean;
/**
 * @author oliver lou
 * @Date 2022-04-28 15:29:32
 * @description 检查是否是一个身份证号
 * @param {*}
 * @return {*}
 */
export declare const identityCardNumberRegExp: RegExp;
export declare function isIdentityCardNumber(value: any): boolean;
/**
 * @author oliver lou
 * @Date 2022-04-28 15:49:03
 * @description 检查是否是一个护照号
 * @param {*}
 * @return {*}
 */
export declare const passportNumberRegExp: RegExp;
export declare function isPassportNumber(value: any): boolean;
/**
 * @author oliver lou
 * @Date 2022-04-28 15:54:39
 * @description 检查是否是一个军官证号
 * @param {*}
 * @return {*}
 */
export declare const militaryIdentityCardNumberRegExp: RegExp;
export declare function isMilitaryIdentityCardNumber(value: any): boolean;
/**
 * @author oliver lou
 * @Date 2022-04-28 15:55:30
 * @description 检查是否是一个港澳通行证号
 * @param {*}
 * @return {*}
 */
export declare const travelCardNumberRegExp: RegExp;
export declare function isTravelCardNumber(value: any): boolean;
/**
 * @author oliver lou
 * @Date 2023-03-20 20:18:52
 * @description 检查是否是一个电子邮箱
 * @param {*} w
 * @return {*}
 */
export declare const emailRegExp: RegExp;
export declare function isEmail(value: string): boolean;
/**
 * @author oliver lou
 * @Date 2023-07-10 09:19:20
 * @description 格式化金额
 * @param {string} str
 * @return { string }
 */
export declare const formatAccount: (str: string) => string;
