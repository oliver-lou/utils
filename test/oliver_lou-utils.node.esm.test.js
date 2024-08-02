import assert from "assert"

import {
  isBoolean,
  isNumber,
  isString,
  isArray,
  getDataTypeof,
  isObject,
  isGeneralizedObject,
  isNarrowObject,
  add,
  isEmptyObject,
  // compileStr,
  // decompileStr,
} from "../dist/oliver_lou-utils.node.esm.js"

describe('isBoolean()', () => {
  it('1. ', () => {
    // 布尔值
    assert.equal(isBoolean(null), false)
    assert.equal(isBoolean(undefined), false)
    assert.equal(isBoolean(false), true)
    assert.equal(isBoolean(true), true)
    assert.equal(isBoolean(0), false)
    assert.equal(isBoolean(1), false)
    assert.equal(isBoolean(NaN), false)
    assert.equal(isBoolean(""), false)
    assert.equal(isBoolean("1"), false)
    assert.equal(isBoolean(Symbol()), false)
    assert.equal(isBoolean({}), false)
    assert.equal(isBoolean(new Object()), false)
    assert.equal(isBoolean([]), false)
    assert.equal(isBoolean(new Array()), false)
    assert.equal(isBoolean(new Date()), false)
    assert.equal(isBoolean(new RegExp()), false)
    assert.equal(isBoolean(new Map()), false)
    assert.equal(isBoolean(new WeakMap()), false)
    assert.equal(isBoolean(new Set()), false)
    assert.equal(isBoolean(new WeakSet()), false)
    assert.equal(
      isBoolean(function () { }),
      false
    )
    assert.equal(
      isBoolean(() => undefined),
      false
    )
  })
})

describe('isNumber()', () => {
  it('1', () => {
    // 数字
    assert.equal(isNumber(null), false)
    assert.equal(isNumber(undefined), false)
    assert.equal(isNumber(false), false)
    assert.equal(isNumber(true), false)
    assert.equal(isNumber(0), true)
    assert.equal(isNumber(1), true)
    assert.equal(isNumber(NaN), true)
    assert.equal(isNumber(""), false)
    assert.equal(isNumber("1"), false)
    assert.equal(isNumber(Symbol()), false)
    assert.equal(isNumber({}), false)
    assert.equal(isNumber(new Object()), false)
    assert.equal(isNumber([]), false)
    assert.equal(isNumber(new Array()), false)
    assert.equal(isNumber(new Date()), false)
    assert.equal(isNumber(new RegExp()), false)
    assert.equal(isNumber(new Map()), false)
    assert.equal(isNumber(new WeakMap()), false)
    assert.equal(isNumber(new Set()), false)
    assert.equal(isNumber(new WeakSet()), false)
    assert.equal(
      isNumber(function () { }),
      false
    )
    assert.equal(
      isNumber(() => undefined),
      false
    )
  })
})

describe('isString()', () => {
  it('1', () => {
    // 字符串
    assert.equal(isString(null), false)
    assert.equal(isString(undefined), false)
    assert.equal(isString(false), false)
    assert.equal(isString(true), false)
    assert.equal(isString(0), false)
    assert.equal(isString(1), false)
    assert.equal(isString(NaN), false)
    assert.equal(isString(""), true)
    assert.equal(isString("1"), true)
    assert.equal(isString(Symbol()), false)
    assert.equal(isString({}), false)
    assert.equal(isString(new Object()), false)
    assert.equal(isString([]), false)
    assert.equal(isString(new Array()), false)
    assert.equal(isString(new Date()), false)
    assert.equal(isString(new RegExp()), false)
    assert.equal(isString(new Map()), false)
    assert.equal(isString(new WeakMap()), false)
    assert.equal(isString(new Set()), false)
    assert.equal(isString(new WeakSet()), false)
    assert.equal(
      isString(function () { }),
      false
    )
    assert.equal(
      isString(() => undefined),
      false
    )
  })
})

// describe('isSymbol()', () => {
//   it('1', () => {
//     // symbol
//     assert.equal(isSymbol(null), false)
//     assert.equal(isSymbol(undefined), false)
//     assert.equal(isSymbol(false), false)
//     assert.equal(isSymbol(true), false)
//     assert.equal(isSymbol(0), false)
//     assert.equal(isSymbol(1), false)
//     assert.equal(isSymbol(NaN), false)
//     assert.equal(isSymbol(""), false)
//     assert.equal(isSymbol("1"), false)

//     assert.equal(isSymbol(Symbol()), true)
//     assert.equal(isSymbol(Symbol('foo')), true)
//     assert.equal(isSymbol(Symbol.iterator), true)
//   })
// })

describe('isGeneralizedObject()', () => {
  // 广义的对象，和lodash保持一致
  assert.equal(isGeneralizedObject(null), false)
  assert.equal(isGeneralizedObject(undefined), false)
  assert.equal(isGeneralizedObject(false), false)
  assert.equal(isGeneralizedObject(true), false)
  assert.equal(isGeneralizedObject(0), false)
  assert.equal(isGeneralizedObject(1), false)
  assert.equal(isGeneralizedObject(NaN), false)
  assert.equal(isGeneralizedObject(""), false)
  assert.equal(isGeneralizedObject("1"), false)
  assert.equal(isGeneralizedObject(Symbol()), false)
  assert.equal(isGeneralizedObject({}), true)
  assert.equal(isGeneralizedObject(new Object()), true)
  assert.equal(isGeneralizedObject([]), true)
  assert.equal(isGeneralizedObject(new Array()), true)
  assert.equal(isGeneralizedObject(new Date()), true)
  assert.equal(isGeneralizedObject(new RegExp()), true)
  assert.equal(isGeneralizedObject(new Map()), true)
  assert.equal(isGeneralizedObject(new WeakMap()), true)
  assert.equal(isGeneralizedObject(new Set()), true)
  assert.equal(isGeneralizedObject(new WeakSet()), true)
  assert.equal(
    isGeneralizedObject(function () { }),
    true
  )
  assert.equal(
    isGeneralizedObject(() => undefined),
    true
  )
  assert.equal(
    isGeneralizedObject(class { }),
    true
  )
})

describe('isObject()', () => {
  it('1', () => {
    // 对象
    assert.equal(isObject(null), false)
    assert.equal(isObject(undefined), false)
    assert.equal(isObject(false), false)
    assert.equal(isObject(true), false)
    assert.equal(isObject(0), false)
    assert.equal(isObject(1), false)
    assert.equal(isObject(NaN), false)
    assert.equal(isObject(""), false)
    assert.equal(isObject("1"), false)
    assert.equal(isObject(Symbol()), false)
    assert.equal(isObject({}), true)
    assert.equal(isObject(new Object()), true)
    assert.equal(isObject([]), true)
    assert.equal(isObject(new Array()), true)
    assert.equal(isObject(new Date()), true)
    assert.equal(isObject(new RegExp()), true)
    assert.equal(isObject(new Map()), true)
    assert.equal(isObject(new WeakMap()), true)
    assert.equal(isObject(new Set()), true)
    assert.equal(isObject(new WeakSet()), true)
    assert.equal(
      isObject(function () { }),
      false
    )
    assert.equal(
      isObject(() => undefined),
      false
    )
    assert.equal(
      isObject(class { }),
      false
    )
  })
})

describe('isNarrowObject()', () => {
  it('1', () => {
    // 狭义的对象
    assert.equal(isNarrowObject(null), false)
    assert.equal(isNarrowObject(undefined), false)
    assert.equal(isNarrowObject(false), false)
    assert.equal(isNarrowObject(true), false)
    assert.equal(isNarrowObject(0), false)
    assert.equal(isNarrowObject(1), false)
    assert.equal(isNarrowObject(NaN), false)
    assert.equal(isNarrowObject(""), false)
    assert.equal(isNarrowObject("1"), false)
    assert.equal(isNarrowObject(Symbol()), false)
    assert.equal(isNarrowObject({}), true)
    assert.equal(isNarrowObject(new Object()), true)
    assert.equal(isNarrowObject([]), false)
    assert.equal(isNarrowObject(new Array()), false)
    assert.equal(isNarrowObject(new Date()), false)
    assert.equal(isNarrowObject(new RegExp()), false)
    assert.equal(isNarrowObject(new Map()), false)
    assert.equal(isNarrowObject(new WeakMap()), false)
    assert.equal(isNarrowObject(new Set()), false)
    assert.equal(isNarrowObject(new WeakSet()), false)
    assert.equal(
      isNarrowObject(function () { }),
      false
    )
    assert.equal(
      isNarrowObject(() => undefined),
      false
    )
    assert.equal(
      isNarrowObject(class { }),
      false
    )
  })
})

describe('getDataTypeof()', () => {
  it('1', () => {
    // 获取数据类型
    assert.equal(getDataTypeof(new Map()), "map")
    // 在浏览器端Chrome 103，是可以得到WeakMap的类型的，但是Node版本14.18.1,16.13.1,18.7.0均无法得到
    assert.equal(getDataTypeof(new WeakMap()), 'weakMap')
    // console.log(result2) // 打印显示undefined
    // assert(getDataTypeof(result2, undefined))
    assert.equal(getDataTypeof(new WeakSet()), 'weakSet')
  })
})

// describe('encodeURI', () => {
//   it("1", function () {
//     let strArr = ["10000", "30000", "a", "b", "c"]
//     strArr.forEach((item) => {
//       const compiled = compileStr(item)
//       const result = decompileStr(compiled)
//       assert.equal(item, result)
//     })
//   })
// })

describe('isEmptyObject()', () => {
  it('1', () => {
    assert.equal(isEmptyObject({}), true)
  })

  it('2', () => {
    try {
      isEmptyObject([])
    } catch (err) {
      // console.log(err)
      assert.equal(err instanceof TypeError, true)
    }
  })
})

describe('add()', () => {
  it('1', () => {
    assert.strictEqual(add('9999999', '9999'), '10009998')
    assert.strictEqual(add(1, 1), 2)
  })
})