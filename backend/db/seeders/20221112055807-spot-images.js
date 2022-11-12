'use strict';

const { SpotImage } = require('../models');

const spotimages = [
  {
    spotId: 1,
    url: "first_spot.jpeg"
  },
  {
    spotId: 2,
    url: "second_spot.jpeg"
  }    
]

module.exports = {
  async up (queryInterface, Sequelize) {
    await SpotImage.bulkCreate(spotimages);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SpotImages', null, {});
  }
};
