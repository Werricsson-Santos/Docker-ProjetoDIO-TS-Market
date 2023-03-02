'use strict';

const { QueryInterface } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    async function categoryIdByName(name) {
      const category = await queryInterface.sequelize.query(`SELECT id FROM categories WHERE name= '${name}';`)
      return category[0][0].id
    }

    await queryInterface.bulkInsert('products', [{
      name: 'Pão de Forma 480g',
      category_id: await categoryIdByName('Mercearia'),
      quantity: 200,
      price: 7.29,
      created_at: new Date(),
      updated_at: new Date()
    },{
      name: 'Café Java',
      category_id: await categoryIdByName('Mercearia'),
      quantity: 5000,
      price: 150,
      created_at: new Date(),
      updated_at: new Date()
    },{
      name: 'Biscoito Salgado Tradicional Pit Stop',
      category_id: await categoryIdByName('Mercearia'),
      quantity: 250,
      price: 3.89,
      created_at: new Date(),
      updated_at: new Date()
    },{
      name: 'Refrigerante Coca-Cola Original 2,5L',
      category_id: await categoryIdByName('Bebidas'),
      quantity: 300,
      price: 9.55,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Pizza Mussarela Seara 440g',
      category_id: await categoryIdByName('Congelados'),
      quantity: 350,
      price: 10.50,
      created_at: new Date(),
      updated_at: new Date()
    },{
      name: 'Sorvete Kibon Napolitano Especial 2L',
      category_id: await categoryIdByName('Congelados'),
      quantity: 400,
      price: 39.90,
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {})
  }
};
