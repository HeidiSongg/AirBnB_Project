'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const { Review } = require('../models');

const reviews = [
  {
    userId: 3,
    spotId: 1,
    review: "very good! really enjoyed our stay",
    stars: 4,
  },
  {
    userId: 2,
    spotId: 1,
    review: "horrible! do not book here",
    stars: 1,
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
    await Review.bulkCreate(reviews);
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Reviews'
    await queryInterface.bulkDelete(options, null, {});
  }
};
