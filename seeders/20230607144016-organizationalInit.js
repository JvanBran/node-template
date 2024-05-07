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
    return queryInterface.bulkInsert('Organizationals',[
      {
        dept_name: "华夏新疆乌鲁木齐分行",
        position: "华夏新疆乌鲁木齐人民路",
        manager: "Jvan",
        phone: "18146628322",
        parent_id: 0,
        order_num: 0,
        createdAt: "2023-05-30 00:00:00",
        updatedAt: "2023-05-30 00:00:00"
      },
      {
        dept_name: "华夏新疆乌鲁木齐分行1",
        position: "华夏新疆乌鲁木齐人民路1",
        manager: "Jvan1",
        phone: "18146628322",
        parent_id: 0,
        order_num: 1,
        createdAt: "2023-05-30 00:00:00",
        updatedAt: "2023-05-30 00:00:00"
      }
    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Organizationals',null,{});
  }
};
