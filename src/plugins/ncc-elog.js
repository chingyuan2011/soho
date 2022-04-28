const isProd = /104\.com\.tw/.test(window.location.hostname)
const disableSendingEvent = !isProd || process.env.PRACTICE_MODE || window.__PRERENDER_PROCESSING

let apiReady = false
const queue = []

const injectScript = () => {
  return new Promise((resolve, reject) => {
    const tag = document.createElement('script')
    tag.src = 'https://static.104.com.tw/104i/js/api/log/e104.log.latest.js'
    tag.onload = () => {
      setTimeout(() => {
        apiReady = true
        resolve()
      }, 1000)
    }
    tag.onerror = reject
    document.getElementsByTagName('body')[0].appendChild(tag)
  })
}
const dispatchLog = (customerId = process.env.VUE_APP_CUSTOMER_ID) => {
  if (!apiReady) {
    queue.push(dispatchLog.bind(null, customerId))

    return
  }

  if (disableSendingEvent) {
    console.log('Dispatch NCC Elog!')
  } else {
    window._elog.push({
      web: '104_bank',
      track: ['viewPage'],
      ext: {
        custno: String(customerId)
      }
    })
  }
}

export default {
  async install (Vue, config = {}) {
    const customerId = config.custno || process.env.VUE_APP_CUSTOMER_ID

    Vue.prototype.$dispatchNccLog = dispatchLog
    queue.push(dispatchLog.bind(null, customerId))

    try {
      await injectScript()

      queue.forEach(cb => {
        cb()
      })
      queue.splice(queue.length)
    } catch (e) {
      console.error(e)
    }
  }
}
