'use strict';
const { Spot } = require('../models');

const spots = [
  {
      address: "123 Disney Lane",
      city: "San Francisco",
      state: "California",
      country: "United States of America",
      lat: 37.7645358,
      lng: -122.4730327,
      name: "App Academy",
      description: "Place where web developers are created",
      price: 123,
      avgRating: 4.5,
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
    avgRating: 4.7,
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
    avgRating: 4.2,
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
    avgRating: 4.6,
    previewImage: "image url",
    ownerId: 3
  }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    await Spot.bulkCreate(spots);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Spots', null, {});
  }
};
