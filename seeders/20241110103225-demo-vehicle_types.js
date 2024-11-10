'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('vehicle_types', [
      {
        name: 'Hatchback',
        type_id:1,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Suv',
        type_id:1,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sedan',
        type_id:1,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cruiser',
        type_id:2,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sports',
        type_id:2,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('vehicle_types', null, {});
  }
};
