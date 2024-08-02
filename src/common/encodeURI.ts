// 对字符串进行加密
// export function compileStr(code) {
//   let c = String.fromCharCode(code.charCodeAt(0) + code.length)
//   for (let i = 1; i < code.length; i++) {
//     c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1))
//   }
//   // 字符串中的每个字符都由单独的 Unicode 数字编码指定。使用语法： String.fromCharCode()。
//   return encodeURI(c) // escape对字符串进行编码，这样就可以在所有的计算机上读取该字符串。
// }
// // 字符串进行解密
// export function decompileStr(code) {
//   code = decodeURI(code)
//   let c = String.fromCharCode(code.charCodeAt(0) - code.length)
//   for (let i = 1; i < code.length; i++) {
//     c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1))
//   }
//   return c
// }