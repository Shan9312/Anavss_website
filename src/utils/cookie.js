/*
 * cookie 操作
 */

/*
 * 设置cookie
 */

export const setCookie = (name, value, time = 0) => {

  if (time) {
    var strsec = getsec(time)

    var exp = new Date()

    exp.setTime(exp.getTime() + strsec * 1)

    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()

  } else {
    document.cookie = name + '=' + escape(value)
  }

}

/*
 * 获取cookie
 */

function getCookie (name) {
  var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')

  if (arr = document.cookie.match(reg)) {
    return unescape(arr[2])
  } else {
    return null
  }
}

/*
 * 删除cookie
 */
export const deleteCookie = (name) => {

  var date = new Date()

  date.setTime(date.getTime() - 10000)

  var cval = getCookie(name)

  if (cval != null)

    document.cookie = name + '=' + cval + ';expires=' + date.toGMTString()

}

/*
 * cookie 时间设置
 * 首字母： s: 秒, h: 小时, d: 天
 * 接着：数字量
 */
const getsec = (str) => {

  var str1 = str.substring(1, str.length) * 1
  var str2 = str.substring(0, 1)
  if (str2 == 's') {
    return str1 * 1000
  }
  else if (str2 == 'h') {
    return str1 * 60 * 60 * 1000
  }
  else if (str2 == 'd') {
    return str1 * 24 * 60 * 60 * 1000
  }
}
