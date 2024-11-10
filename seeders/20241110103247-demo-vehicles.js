'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('vehicles', [
      {
        name: 'Maruti Swift',
        vehicle_id:1,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Volkswagen Taigun',
        vehicle_id:2,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Honda City',
        vehicle_id:3,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Royal Enfield Classic 350',
        vehicle_id:4,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Yamaha Xabre',
        vehicle_id:5,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('vehicles', null, {});
  }
};
