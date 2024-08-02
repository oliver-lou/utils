// 日期相关的函数

/**
 * @author oliver lou
 * @Date 2022-12-15 17:29:23
 * @description 检查Date对象是否为有效的Date对象，不为Invalid Date
 * @return { boolean }
 */
export function isValidDate(date: Date): boolean {
  return date instanceof Date && !Number.isNaN(date.getTime())
}

// 判断连个日期是否为同一天
export function isSameDay(dateFirst: string, dateSecord: string) {
  const date1 = new Date(dateFirst)
  const date2 = new Date(dateSecord)
  const day1 = date1.getDay()
  const day2 = date2.getDay()
  if (Number.isNaN(day1) || Number.isNaN(day2)) {
    throw new TypeError('Invalid Date')
  }
  const result = day1 - day2
  if (result === 0) {
    return true // 是同一天
  } else {
    return false
  }
}

/**
 * @author oliver lou
 * @Date 2022-09-19 11:16:31
 * @description 判断是否是火车票预定时间
 * @return {*}
 */
 export function isTrainOrderTicketTime() {
  const now = new Date()
  // const now = new Date('2022-09-19 04:00:00')
  const hour = now.getHours()
  const minute = now.getMinutes()
  const weekDay = now.getDay()
  if (weekDay === 2) {
    if (hour >= 5 && (hour < 23 || (hour === 23 && minute < 25))) {
      return true
    } else {
      return false
    }
  } else {
    if (hour >= 5 || (hour === 0 && minute < 55)) {
      return true
    } else {
      return false
    }
  }
}
