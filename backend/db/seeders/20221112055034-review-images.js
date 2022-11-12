'use strict';

const { ReviewImage } = require('../models');


const reviewimages = [
  {
    reviewId: 1,
    url: "first_review.jpeg"
  },
  {
    reviewId: 2,
    url: "second_review.jpeg"
  }    
]

module.exports = {
  async up (queryInterface, Sequelize) {
    await ReviewImage.bulkCreate(reviewimages);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ReviewImages', null, {});
  }
};
