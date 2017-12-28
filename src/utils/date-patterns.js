/*
 * 常用日期格式
 */
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
/*
 // 案例：
 (function () {
 console.log(new Date().format(datePatterns.year));
 console.log(new Date().format(datePatterns.month));
 console.log(new Date().format(datePatterns.date));
 console.log(new Date().format(datePatterns.datetime));
 })();
 */
