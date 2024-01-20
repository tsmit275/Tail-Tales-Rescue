'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     **/
      await queryInterface.bulkInsert('animals', [
      {
        name: 'John Doe',
        breed: 'Yorkshire Terrier',
        picture01: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.healthypawspetinsurance.com%2Fbreed-guide-teacup-yorkie&psig=AOvVaw13iPcgyG9AAAuPXj2pE7Pb&ust=1705711350924000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMCi5o6c6IMDFQAAAAAdAAAAABAD',
        gender: 'Female',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Milo',
        breed: 'Siberian Husky',
        picture01: 'https://www.rover.com/blog/wp-content/uploads/2020/06/siberian-husky-4735878_1920.jpg',
        gender: 'Male',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Luna',
        breed: 'Burmese Cat',
        picture01: 'https://miro.medium.com/v2/resize:fit:1400/0*r7fZlyaH18rRJdIr.jpg',
        gender: 'Female',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Betty',
        breed: 'Siamese Cat',
        picture01: 'https://miro.medium.com/v2/resize:fit:1400/0*r7fZlyaH18rRJdIr.jpg',
        gender: 'Female',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Betty',
        breed: 'Siamese Cat',
        picture01: 'https://miro.medium.com/v2/resize:fit:1400/0*r7fZlyaH18rRJdIr.jpg',
        gender: 'Female',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Betty',
        breed: 'Siamese Cat',
        picture01: 'https://miro.medium.com/v2/resize:fit:1400/0*r7fZlyaH18rRJdIr.jpg',
        gender: 'Female',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Betty',
        breed: 'Siamese Cat',
        picture01: 'https://miro.medium.com/v2/resize:fit:1400/0*r7fZlyaH18rRJdIr.jpg',
        gender: 'Female',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Betty',
        breed: 'Siamese Cat',
        picture01: 'https://miro.medium.com/v2/resize:fit:1400/0*r7fZlyaH18rRJdIr.jpg',
        gender: 'Female',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Betty',
        breed: 'Siamese Cat',
        picture01: 'https://miro.medium.com/v2/resize:fit:1400/0*r7fZlyaH18rRJdIr.jpg',
        gender: 'Female',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
     await queryInterface.bulkDelete('animals', null, {});
     
  }
};
