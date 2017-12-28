/*
 * 给日期添加格式化方法
 */
(function () {
  /**
   * 日期格式化
   * @param pattern {String} 格式
   * @returns {String}
   */
  Date.prototype.format = function (pattern) {
    const values = {
      'y+': this.getFullYear(), // 年份
      'M+': this.getMonth() + 1, // 月份
      'd+': this.getDate(), // 日
      'H+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分
      's+': this.getSeconds(), // 秒
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
      'S+': this.getMilliseconds() // 毫秒
    }
    for (let key in values) {
      pattern = pattern.replace(new RegExp(key), (match) => {
        return ('000' + values[key]).slice(-match.length)
      })
    }
    return pattern
  }

  Date.prototype.addDays = function (d) {
    this.setDate(this.getDate() + d)
    return this
  }
  Date.prototype.addWeeks = function (w) {
    this.addDays(w * 7)
    return this
  }
  Date.prototype.addMonths = function (m) {
    let d = this.getDate()
    this.setMonth(this.getMonth() + m)
    if (this.getDate() < d)
      this.setDate(0)
    return this
  }
  Date.prototype.addYears = function (y) {
    let m = this.getMonth()
    this.setFullYear(this.getFullYear() + y)
    if (m < this.getMonth()) {
      this.setDate(0)
    }
    return this
  }
})()

/*
const datePatterns = Object.freeze({
  year:'yyyy',
  month:'yyyy-MM',
  date:'yyyy-MM-dd',
  datetime:'yyyy-MM-dd HH:mm:ss',
  timestamp:'yyyy-MM-dd HH:mm:ss.SSS',
});
export {
  datePatterns as default
}
*/
/*
 // 案例：
 (function () {
 console.log(new Date().format(datePatterns.year));
 console.log(new Date().format(datePatterns.month));
 console.log(new Date().format(datePatterns.date));
 console.log(new Date().format(datePatterns.datetime));
 })();
 */
