'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
const { Booking } = require('../models');

const bookings = [
  {
    spotId: 1,
    userId: 3,
    startDate: "2022-11-11",
    endDate: "2022-11-19"
  },
  {
    spotId: 2,
    userId: 1,
    startDate: "2022-12-24",
    endDate: "2023-01-01"
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    await Booking.bulkCreate(bookings);
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Bookings'
    await queryInterface.bulkDelete(options, null, {});
  }
};
