import { isArrayLike } from '../src/common/object'

{
  const arrayLike = { length: 1 }
  const result = isArrayLike(arrayLike)
  console.log(result)
}

{
  const obj = { a: 1 }
  const result = isArrayLike(obj)
  console.log(result)
}