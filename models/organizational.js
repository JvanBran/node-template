'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organizational extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Organizational.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    dept_name:{
      type: DataTypes.STRING,
      allowNull: false,
      comment: '组织架构名'
    },
    position:{
        type: DataTypes.STRING,
        allowNull: false,
        comment: '位置'
    },
    manager:{
        type: DataTypes.STRING,
        allowNull: false,
        comment: '责任人'
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false,
        comment: '联系电话'
    },
    parent_id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        comment: '父亲节点编号'
    },
    order_num:{
        type: DataTypes.BIGINT,
        allowNull: false,
        comment: '同层排序'
    }
  }, {
    sequelize,
    modelName: 'Organizational',
    comment: "组织架构"
  });
  return Organizational;
};