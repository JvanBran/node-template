const router = require('koa-router')()
const datalize = require('datalize');
const field = datalize.field;
const { getInfo } = require('@controller/version.js')
module.exports = router
// 版本信息
.get('/info',datalize.query([]),getInfo)