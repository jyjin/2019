/***
 * 封装一个rm 删除命令
 * 
 * 调用 
 * 1.直接删除 node app1.js rm test 
 *           node app1.js remove test
 * 2.递归删除 node app1.js rm -r test 
 *           node app1.js rm -recursive test
 *           node app1.js remove -r test
 *           node app1.js remove -recursive test
 */

var program = require('commander');

program
  .version('0.0.4')
  .command('remove <dir>')
  .alias('rm')
  .command('start [options]', "启动")
  .description('功能: remove|rm 命令, 删除相关目录或文件')   // -h 时， 显示的解释文案信息
  .option('-r, --recursive', '递归删除')                  // -r a
  .action(function (dir, cmd) {
    console.log('dir == ', dir)
    // console.log('cmd == ', cmd)
    console.log((cmd.recursive ? ' 递归' : '') + '删除 ' + dir )
  })
program.parse(process.argv); // 接受命令行参数

// console.log(program.args)

process.on('SIGINT', function () {
  console.log('hahaha ...')
  program.runningCommand && program.runningCommand.kill('SIGKILL');
  process.exit(0);
});