/**
 * 自定义命令
 * 
 * 调用方式
 * 
 * node app.js -l
 * node app.js --list
 * node app.js -d
 * node app.js -p
 * node app.js -r
 * node app.js -r test.js
 * node app.js -l -d -r
 * node app.js -ldr
 * node app.js -V
 * node app.js -h
 * 
 */

var program = require('commander');

program
  .version('0.0.3')
  .option('-l, --list', '展示项目版本信息')
  .option('-d, --develop', '开发者模式运行')
  .option('-p, --product', '发布模式运行')
  .option('-r, --reset [type]', '删除文件')
  .option('-y, --yes [type]', 'xiaoeya')
  .parse(process.argv); // 接受命令行参数

const YOUR_COMMAND = '你输入的命令是:'
const YOUR_ARGS = '参数是:'
if (program.list) {
  console.log(`${YOUR_COMMAND} list ${YOUR_ARGS}${program.list}`);
}
if (program.develop) {
  console.log(`${YOUR_COMMAND} develop ${YOUR_ARGS}${program.develop}`);
}
if (program.product) {
  console.log(`${YOUR_COMMAND} product ${YOUR_ARGS}${program.product}`);
}
if (program.reset) {
  console.log(`${YOUR_COMMAND} reset ${YOUR_ARGS}${program.reset}`);
}
if (program.yes) {
  console.log(`${YOUR_COMMAND} yes ${YOUR_ARGS}${JSON.stringify(program, null, 2)}`);
}
// console.log(program.opts())