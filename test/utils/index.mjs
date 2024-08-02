export const testArr = [
  null,
  undefined,
  NaN,
  false,
  "",
  0,
  1,
  Symbol(),
  {},
  [],
  new Date(),
  new RegExp(),
  new Array(),
  new Object(),
  new Function(),
  new Map(),
  new Set(),
  new WeakMap(),
  new WeakSet(),
]

export function isArray(arg) {
  return Array.isArray(arg)
}