'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Owners',[
      {
        owner_name: "Jvan",
        owner_password: "123456",
        owner_phone:"18146628322@189",
        owner_email: "18146628322@189.cn",
        owner_status: 0,
        owner_ramke: "超级管理员",
        createdAt: "2023-05-30 00:00:00",
        updatedAt: "2023-05-30 00:00:00"
      }],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Owners',null,{});
  }
};
