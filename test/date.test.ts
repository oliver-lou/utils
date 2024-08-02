import assert from "assert"
import { isSameDay, isValidDate } from "../src/common/date"


// new Date('20220101') 会返回invalid date
// console.log(isSameDay('20220101'))

assert.strictEqual(isSameDay('2022-01-01', '2022-01-01'), true)

assert.strictEqual(isValidDate(new Date()), true)
assert.strictEqual(isValidDate(new Date('')), false)
