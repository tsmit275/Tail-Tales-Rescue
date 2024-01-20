'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('animals', [
        // Dogs
        { name: 'Buddy', breed: 'Golden Retriever', gender: 'Male', picture01: 'https://petstablished-app-beta.s3.amazonaws.com/uploads/image/image/3725974/simna3.jpeg', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Bella', breed: 'Labrador', gender: 'Female', picture01: 'https://i.etsystatic.com/36600594/r/il/558268/4628233415/il_794xN.4628233415_fx60.jpg', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Max', breed: 'Beagle', gender: 'Male', picture01: 'https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg?w=400&h=300&c=crop', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Lucy', breed: 'Poodle', gender: 'Female', picture01: 'https://image.petmd.com/files/inline-images/standard-poodle.jpg?VersionId=1Pjx5emdAPxmImIlwCR0tX3HXxxm_NhT', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Charlie', breed: 'Bulldog', gender: 'Male', picture01: 'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-168620477-e1691273341205.jpg?w=1024', createdAt: new Date(), updatedAt: new Date() },
        // Cats
        { name: 'Luna', breed: 'Siamese', gender: 'Female', picture01: 'https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg?w=3840&q=75&auto=format', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Oliver', breed: 'Persian', gender: 'Male', picture01: 'https://img.cutenesscdn.com/640/clsd/getty/9d63ea7f7bd0464b8ebcf42a5d6b8a45', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Leo', breed: 'Maine Coon', gender: 'Male', picture01: 'https://image.petmd.com/files/styles/978x550/public/2023-04/Maine-coon-cat.jpg?w=2048&q=75', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Milo', breed: 'Bengal', gender: 'Male', picture01: 'https://www.aspcapetinsurance.com/media/2360/bengal-cat-facts.jpg', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Lily', breed: 'Ragdoll', gender: 'Female', picture01: 'https://www.thesprucepets.com/thmb/17UY4UpiMekV7WpeXDziXsnt7q4=/1646x0/filters:no_upscale():strip_icc()/GettyImages-145577979-d97e955b5d8043fd96747447451f78b7.jpg', createdAt: new Date(), updatedAt: new Date() },
        // Exotic Animals
        { name: 'Raja', breed: 'Tiger', gender: 'Male', picture01: 'https://images.pexels.com/photos/64152/tiger-cub-tiger-cub-big-cat-64152.jpeg?cs=srgb&dl=pexels-pixabay-64152.jpg&fm=jpg', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Leo', breed: 'Lion', gender: 'Male', picture01: 'https://www.lpzoo.org/wp-content/uploads/2023/03/IMG_3295-2048x1520-1-750x557.jpeg', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Kiki', breed: 'Parrot', gender: 'Female', picture01: 'https://static.bimago.pl/mediacache/catalog/product/cache/3/6/129163/image/750x1120/bb8426ff382faa4f6642966567bb457c/129163_6.jpg', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Nala', breed: 'Leopard', gender: 'Female', picture01: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp19vtgnNUAti7yXgJEUX2OJxxerwVQVhrcA&usqp=CAU', createdAt: new Date(), updatedAt: new Date() },
        { name: 'Zara', breed: 'Zebra', gender: 'Female', picture01: 'https://nationalzoo.si.edu/sites/default/files/newsroom/20220421-tarabuk-zebra-yipes-014.jpg', createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('animals', null, {});
  }
};