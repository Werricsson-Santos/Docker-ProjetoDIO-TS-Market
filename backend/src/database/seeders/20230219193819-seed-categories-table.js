'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [{
      name:'Mercearia',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name:'Bebidas',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name:'Congelados',
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {})
  }
};
