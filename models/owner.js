'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Owner.init({
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    owner_name:{
        type: DataTypes.STRING,
        allowNull: false,
        comment: '管理员用户名'
    },
    owner_password:{
        type: DataTypes.STRING,
        allowNull: false,
        comment: '管理员密码'
    },
    owner_phone:{
        type: DataTypes.STRING,
        allowNull: false,
        comment: '管理员手机'
    },
    owner_email:{
        type: DataTypes.STRING,
        allowNull: false,
        comment: '管理员邮箱'
    },
    owner_status:{
        type: DataTypes.INTEGER(1),
        defaultValue: 0,
        allowNull: false,
        comment: '管理员状态 0 启用 1 禁用'
    },
    owner_ramke:{
        type: DataTypes.STRING,
        allowNull: false,
        comment: '备注'
    }
  }, {
    sequelize,
    modelName: 'Owner',
    comment: "管理员用户信息"
  });
  return Owner;
};