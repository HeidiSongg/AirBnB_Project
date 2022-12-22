'use strict';
const { Spot } = require('../models');
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
const spots = [
  {
      address: "123 GoldenGate Lane",
      city: "San Francisco",
      state: "California",
      country: "United States of America",
      lat: 39.7645358,
      lng: -120.4730327,
      name: "Guest Suite in San Francisco",
      description: "Convenient location and reasonable price",
      price: 80,
      previewImage: "image url",
      ownerId: 1
  },
    {
    address: "323 Monterey Dr",
    city: "Monterey",
    state: "California",
    country: "United States of America",
    lat: 50.7645358,
    lng: -12.4730327,
    name: "Cliff House",
    description: "Big Sur Coast and Stunning Ocean Views",
    price: 520,
    previewImage: "image url",
    ownerId: 1
  },
  {
    address: "5875 Monaco road",
    city: "Monaco",
    state: "NA",
    country: "Monaco",
    lat: 30.7645358,
    lng: -22.4730327,
    name: "Luxury APT",
    description: "luxurious flat located in a prestigious residence with security and swimming pool",
    price: 1612,
    previewImage: "image url",
    ownerId: 2
  },
  {
    address: "1 Seoul Drive",
    city: "Seoul",
    state: "Jongno-gu",
    country: "South Korea",
    lat: 120.7645358,
    lng: -25.4730327,
    name: "Private Hanok",
    description: "You can spend a special day in a cleanly remodeled hanok full of Korean cool",
    price: 174,
    previewImage: "image url",
    ownerId: 3
  }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    await Spot.bulkCreate(spots);
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots'
     await queryInterface.bulkDelete(options, null, {});
  }
};
