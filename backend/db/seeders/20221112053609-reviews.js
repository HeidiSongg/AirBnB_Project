'use strict';

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
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
