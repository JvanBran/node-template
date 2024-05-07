'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Organizationals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dept_name:{
        type: Sequelize.STRING,
        allowNull: false,
        comment: '组织架构名'
      },
      position:{
          type: Sequelize.STRING,
          allowNull: false,
          comment: '位置'
      },
      manager:{
          type: Sequelize.STRING,
          allowNull: false,
          comment: '责任人'
      },
      phone:{
          type: Sequelize.STRING,
          allowNull: false,
          comment: '联系电话'
      },
      parent_id:{
          type: Sequelize.BIGINT,
          allowNull: false,
          comment: '父亲节点编号'
      },
      order_num:{
          type: Sequelize.BIGINT,
          allowNull: false,
          comment: '同层排序'
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Organizationals');
  }
};