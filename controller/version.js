const {sequelize,Sequelize, Version} = require('@models/index.js');
class UserController{
    // 用户登录
    static async getInfo (ctx) {
        const info = await Version.findAll({})
        ctx.success(info)
    }
};
module.exports = UserController