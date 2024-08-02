import { transformToAmountInWords } from "../src/common/index";

// const count = 10000
// const count = 100
const count = 10
for (let index = 0; index < count; index++) {
  const result = transformToAmountInWords(index)
  console.log(result)
}

// Note: 可以最多精确到小数点后四位，再多的会忽略
const result1 = transformToAmountInWords(1.9987)
console.log(result1)