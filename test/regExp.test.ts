import { isEmail, isMobilePhoneNumber } from '../src/common/regExp'

{
  const result = isMobilePhoneNumber('18801268763')
  console.log(result)
}

{
  let email = 'oliver_lou@163.com'
  const result = isEmail(email)
  console.log(result)
}

{
  let email = 'oliver_lou@163.com1'
  const result = isEmail(email)
  console.log(result)
}
