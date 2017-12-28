/**
 * Created by Administrator on 2017/8/14.
 */
import gulp from 'gulp'
import zip from 'gulp-zip'
import debug from 'gulp-debug'
import _ from 'underscore'
import './src/utils/date'
// import tlog from './src/http/test/test-log'
// import './src/enums/tests'

gulp.task('default', function () {
  console.log("打包发布命令:");
  console.log("npm run build");
  console.log("gulp command");
})
/** 打包发布文件 */
gulp.task('command', function () {
  console.log(` `);
  console.log("cp -r ./dist/* /usr/share/nginx/html/anavss-home/");
  console.log(` `);
})

gulp.task('test', function () {})

gulp.task('test2', function () {
  console.log([
    {id: _.uniqueId(), name: 'Aa'},
    {id: _.uniqueId(), name: 'Bb'},
    {id: _.uniqueId(), name: 'Cc'}
  ].filter(row => row.name.indexOf('a') >= 0))
  console.log([
    {id: _.uniqueId(), name: 'Aa'},
    {id: _.uniqueId(), name: 'Bb'},
    {id: _.uniqueId(), name: 'Cc'}
  ].map(row => row.id))
})
gulp.task('json', function () {
  console.log(JSON.stringify({
    'code': 'SUCCESS',
    'data': [],
    'message': '成功',
    'exception': '成功',
    'pageCount': 15,
    'rowCount': 20,
    'totalCount': 295
  }))
})


