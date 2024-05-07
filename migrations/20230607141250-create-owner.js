'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Owners', {
      id:{
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },
      owner_name:{
          type: Sequelize.STRING,
          allowNull: false,
          comment: '管理员用户名'
      },
      owner_password:{
          type: Sequelize.STRING,
          allowNull: false,
          comment: '管理员密码'
      },
      owner_phone:{
          type: Sequelize.STRING,
          allowNull: false,
          comment: '管理员手机'
      },
      owner_email:{
          type: Sequelize.STRING,
          allowNull: false,
          comment: '管理员邮箱'
      },
      owner_status:{
          type: Sequelize.INTEGER(1),
          defaultValue: 0,
          allowNull: false,
          comment: '管理员状态 0 启用 1 禁用'
      },
      owner_ramke:{
          type: Sequelize.STRING,
          allowNull: false,
          comment: '备注'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Owners');
  }
};