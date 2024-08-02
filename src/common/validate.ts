/**
 * @Description: 用于表单校验的函数
 * @Author: oliver lou

 * @Date: 2020-11-18 17:08:29
 * @Param: 无
*/
import { ip2number } from './index'

const ipReg = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|[1-9])\.((([0-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))))\.((([0-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))))\.((([0-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))))$/;

const domainReg = /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/;

const charReg = /[a-zA-Z]+/;

/**
 * @Description: 校验单IP的情形
 * @Author: oliver lou

 * @Date: 2020-10-15 14:16:55
 * @Param: 无
*/
export function checkSingleIp(rule, value, callback) {
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
export function checkNames(rule, value, callback) {
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
export function checkIp(rule, value, callback) {
    if (!value) {
        callback();
        return;
    }
    // 如果有 - ，分开校验
    if (value.indexOf('-') > -1) {
        const ips = value.split('-');

        for (let i = 0; i < ips.length; i++) {
            if (!ipReg.test(ips[i])) {
                callback(
                    '请输入正确的IP/IP段。例，192.168.1.1-192.168.1.50'
                );
                return true;
            }
        }

        // 校验前后2个ip的大小关系
        const ip1Number = ip2number(ips[0]);
        const ip2Number = ip2number(ips[1]);

        if (ip1Number >= ip2Number) {
            callback(
                '网段截止IP必须大于网段起始IP'
            );
        }

    } else if (value.indexOf('/') > -1) {
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
    } else if (!ipReg.test(value)) {
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
export function checkAddress(rule, value, callback) {
    // 校验ip地址
    const ipReg = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|[1-9])\.((([0-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))))\.((([0-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))))\.((([0-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))))$/;

    // 校验域名
    const domainReg = /^([a-zA-Z0-9-]+\\.){1,}(com|net|edu|miz|biz|cn|cc)$/;
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

export function checkDomain(rule, value, callback) {
    if (!value) {
        callback();
        return;
    }
    if (!domainReg.test(value)) {
        callback('请输入正确的域名')
    }

    callback();
}

/**
 * @Description: 校验IP或者域名
 * @Author: oliver lou

 * @Date: 2020-11-18 17:16:40
 * @Param: 无
*/
export function checkIpOrDomain(rule, value, callback) {
    if (!value) {
        callback();
        return;
    }

    // let flag = false;
    if (charReg.test(value)) {
        if (!domainReg.test(value)) {
            callback('请输入正确的IP/域名');
        }
    } else {
        if (!ipReg.test(value)) {
            callback('请输入正确的IP/域名');
        }
    }

    callback();
}

/**
 * @author oliver lou
 * @Date 2022-08-04 14:52:46
 * @description 校验手机号的正则表达式
 * @return {*}
 */
export const phoneRegExp = /^1[3456789][0-9]{9}$/

// 校验手机号
export function checkPhone(rule, value, callback) {
    const blank = /^\S*$/;
    //手机号校验
    const phone = /^1(3|4|5|6|7|8|9)\d{9}$/
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
export function checkMAC(rule, value, callback) {
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
export function checkRangeInt(min, max) {
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
            } else {
                const num = +numString;
                // console.log(num);
                if (num < min || num > max) {
                    return false
                }
                return true;
            }
        }

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
    }
}

// 检查邮箱（包含单邮箱和多邮箱的情况）
export function checkPostbox(rule, value, callback) {
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
export function checkEmail(rule, value, callback) {
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

export function checkBlank(rule, value, callback) {
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
export function checkCascader(rule, value, callback) {
    // 数组的值，当新增的时候为undefined，编辑的时候为''
    // console.log(value);
    if (value.some((item) => !item)) {
        callback('不能为空');
    }
    callback();
}