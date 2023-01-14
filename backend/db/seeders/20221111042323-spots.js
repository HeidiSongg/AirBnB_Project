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
      previewImage: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
    previewImage: "https://images.unsplash.com/photo-1613643043796-a370ee99ecbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
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
    previewImage: "https://images.unsplash.com/photo-1555596898-b47629548ba9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ownerId: 2
  },
  {
    address: "300 Yosemite Dr",
    city: "Yosemite Valley",
    state: "California",
    country: "United States of America",
    lat: 10.7645358,
    lng: -15.4730327,
    name: "Cabin in Yosemite",
    description: "Centrally located and close to the most visited tourist destinations.",
    price: 250,
    previewImage: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ownerId: 3
  },
  {
    address: "1 Seoul Drive",
    city: "Seoul",
    state: "Jongno-gu",
    country: "South Korea",
    lat: 120.7645358,
    lng: -25.4730327,
    name: "Private Hanok",
    description: "You can spend a special day in a cleanly remodeled hanok full of Korean vibe",
    price: 174,
    previewImage: "https://images.unsplash.com/photo-1628579064393-28cd8ebec686?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    ownerId: 2
  },
  {
    address: "25th Ave ",
    city: "Marrakesh",
    state: "NA",
    country: "Morocco",
    lat: 20.7645358,
    lng: 25.4730327,
    name: "Riads in Marrakesh",
    description: "Popular points of interest near Riad Salman include Le Jardin Secret, Mouassine Museum and Souk of the Medina.",
    price: 80,
    previewImage: "https://images.unsplash.com/photo-1624804821465-5c7c80f99bd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
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
