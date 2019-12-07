
const WXBizDataCrypt = require('./WXBizDataCrypt')

var Koa = require('koa');
var Router = require('koa-router');
const bodyParser = require('koa-bodyparser')

var app = new Koa();
var router = new Router();

router.post('/descrypt', async (ctx, next) => {
  // ctx.router available
  console.log('param == ', ctx.request.body)
  let { appId, iv, encryptedData, sessionKey } = ctx.request.body
  var pc = new WXBizDataCrypt(appId, sessionKey)
  ctx.body = {
    res: 1,
    data: pc.decryptData(encryptedData, iv)
  }
});

app.use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);