// 处理兼容性相关工具函数
export const inBrowser = typeof window !== "undefined"

let userAgent = ""
let ua = ""
if (inBrowser) {
  userAgent = navigator.userAgent
  ua = userAgent.toLowerCase()
}

/**
 * @author oliver lou
 * @Date 2022-09-13 13:46:39
 * @description 判断是否是Edge浏览器
 * @return {*}
 */
export function isEdgeBrowser(): boolean {
  return ua.indexOf("edge/") > 0 || ua.indexOf("edg/") > 0
}

/**
 * @author oliver lou
 * @Date 2022-09-13 13:50:19
 * @description 判断是否是火狐浏览器
 * @return {*}
 */
// TODO:待测试
export function isFireFoxBrowser() {
  return ua.match(/firefox\/(\d+)/)
}

/**
 * @author oliver lou
 * @Date 2022-07-11 15:34:22
 * @description 检测是否是Android浏览器环境，兼容Chrome Dev Tools
 * @return {*}
 */
export function isAndroid(): boolean {
  return userAgent.indexOf("Android") > -1 || userAgent.indexOf("Adr") > -1
}

/**
 * @author oliver lou
 * @Date 2022-07-11 15:34:48
 * @description 检测是否是iOS浏览器环境，兼容Chrome Dev Tools
 * @return {*}
 */
export function isiOS(): boolean {
  return !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

/**
 * @author oliver lou
 * @Date 2022-09-07 18:36:41
 * @description 判断是否是微信浏览器环境
 * @return {*}
 */
export function isWeChatBrowser(): boolean {
  if (ua.match(/micromessenger/i)) {
    return true
  } else {
    return false
  }
}

/**
 * @author oliver lou
 * @Date 2022-09-07 18:36:53
 * @description 判断是否是企业微信浏览器环境
 * @return {*}
 */
export function isEnterpriseWeChatBrowser(): boolean {
  if (ua.indexOf("wxwork") > 0) {
    return true
  } else {
    return false
  }
}

/**
 * @author oliver lou
 * @Date 2022-09-07 18:37:33
 * @description 判断是否是支付宝浏览器环境
 * @return {*}
 */
export function isAlipayBrowser(): boolean {
  if (ua.indexOf("alipay") > 0) {
    return true
  } else {
    return false
  }
}

/**
 * @author oliver lou
 * @Date 2022-09-07 18:40:05
 * @description 判断是否是钉钉浏览器环境
 * @return {*}
 */
export function isDingTalkBrowser(): boolean {
  if (ua.indexOf("dingtalk") > 0) {
    return true
  } else {
    return false
  }
}
