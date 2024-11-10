'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('types', [
      {
        name: 'Car',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bike',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('types', null, {});
  }
};
