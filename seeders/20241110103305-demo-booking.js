'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('bookings', [
      {        
        first_name:'Kishan',
        last_name:'Kushwah',
        startDate: new Date(),
        endDate: new Date(),
        vehicle_id:1,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name:'Rahul',
        last_name:'Rao',
        startDate: new Date(),
        endDate: new Date(),
        vehicle_id:1,
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('bookings', null, {});
  }
};
