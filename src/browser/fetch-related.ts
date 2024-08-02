/**
 * @author oliver lou
 * @Date 2024-08-01 12:25:20
 * @description 自动重试的fetch，主要是为了过渡后端服务更新
 * @param {string} url
 * @param {object} data
 * @return {*}
 */
export function fetchRetry(url: string, data: object): Promise<any> {
  let max = 3
  const resquest = async () => {
    let response: Response
    try {
      response = await fetch(url, { method: 'POST', body: JSON.stringify(data) })
      if (response.status !== 200 && max > 0) {
        max--
        return await retry()
      } else {
        return response
      }
    } catch (e) {
      if (max > 0) {
        max--
        return await retry()
      }
      return e;
    }
  }

  const retry = () => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const response = await resquest()
        resolve(response)
      }, 1000)
    })
  }

  return resquest()
}

/**
 * @author oliver lou
 * @Date 2024-08-01 12:32:33
 * @description 创建fetchRetry实例
 * @param {number} max
 * @param {number} ms
 * @return {*}
 */
export function createFetchRetry(max: number, ms: number, errorStatusArr: number[]): (url: string, init: object) => Promise<any> {
  return (url: string, init: object) => {
    const resquest = async () => {
      let response: Response
      try {
        response = await fetch(url, init)
        if (errorStatusArr.includes(response.status) && max > 0) {
          max--
          return await retry()
        } else {
          return response
        }
      } catch (e) {
        if (max > 0) {
          max--
          return await retry()
        }
        return e;
      }
    }

    const retry = () => {
      return new Promise((resolve) => {
        setTimeout(async () => {
          const response = await resquest()
          resolve(response)
        }, ms)
      })
    }

    return resquest()
  }
}

/**
 * @author oliver lou
 * @Date 2024-08-01 17:36:04
 * @description 并发请求
 * @param {*} urls 待请求的url数组
 * @param {*} maxNum 最大并发数
 * @return {*}
 */
export function limitedRequest(urls: string[], maxNum: number): Promise<any> {
  return new Promise((resolve) => {
    const len = urls.length
    if (!Array.isArray(urls) || len === 0) {
      resolve([])
      return
    }
    const result = []
    let index = 0; // 下一个请求的下标
    let finishedCount = 0 // 当前请求完成的数量
    async function request() {
      if (index === len) {
        return
      }
      const currentIndex = index
      const url = urls[index]
      index++
      try {
        const resp = await fetch(url)
        result[currentIndex] = resp;
      } catch (err) {
        result[currentIndex] = err;
      } finally {
        // 判断所有请求是否都已完成
        finishedCount++
        if (finishedCount === len) {
          resolve(result)
          return
        }
        request()
      }

    }

    const times = Math.min(len, maxNum)
    for (let i = 0;i < times;i++) {
      request()
    }
  })
}

/**
 * @author oliver lou
 * @Date 2024-08-01 18:36:23
 * @description 创建并发请求实例，用于处理其他异步方法，比如执行sql语句
 * @return {*}
 */
export function createLimitedRequest(asyncFunc: Function): (urls: string[], maxNum: number) => Promise<any> {
  return (urls: string[], maxNum: number) => {
    return new Promise((resolve) => {
      const len = urls.length
      if (!Array.isArray(urls) || len === 0) {
        resolve([])
        return
      }
      const result = []
      let index = 0; // 下一个请求的下标
      let finishedCount = 0 // 当前请求完成的数量
      async function request() {
        if (index === len) {
          return
        }
        const currentIndex = index
        const url = urls[index]
        index++
        try {
          const resp = await asyncFunc(url)
          result[currentIndex] = resp;
        } catch (err) {
          result[currentIndex] = err;
        } finally {
          // 判断所有请求是否都已完成
          finishedCount++
          if (finishedCount === len) {
            resolve(result)
            return
          }
          request()
        }

      }

      const times = Math.min(len, maxNum)
      for (let i = 0;i < times;i++) {
        request()
      }
    })
  }
}