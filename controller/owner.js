const {sequelize,Sequelize, Owner} = require('@models/index.js');
import Controller from './controller'
class UserController extends Controller{
    constructor() { super() }
    // 用户登录
    static async getInfo (ctx) {
        const info = await Owner.findAll({})
        ctx.success(info)
    }
};
module.exports = UserController