const db = require("../models");
const Animals = db.animals;
async function syncDb(){
    await syncAnimals();
}

async function syncAnimals(){
    //dogs
    await Animals.create({ name: 'Buddy', description: 'A friendly and loyal companion.', age: Math.floor(Math.random() * 20) + 1, breed: 'Golden Retriever', gender: 'Male', picture01: 'https://petstablished-app-beta.s3.amazonaws.com/uploads/image/image/3725974/simna3.jpeg', createdAt: new Date(), updatedAt: new Date() })
    await Animals.create({ name: 'Bella', description: 'Intelligent and good-natured.', age: Math.floor(Math.random() * 20) + 1, breed: 'Labrador', gender: 'Female', picture01: 'https://i.etsystatic.com/36600594/r/il/558268/4628233415/il_794xN.4628233415_fx60.jpg', createdAt: new Date(), updatedAt: new Date() })
    await Animals.create({ name: 'Max', description: '', age: Math.floor(Math.random() * 20) + 1, breed: 'Beagle', gender: 'Male', picture01: 'https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg?w=400&h=300&c=crop', createdAt: new Date(), updatedAt: new Date() })
    await Animals.create({ name: 'Lucy', description: '', age: Math.floor(Math.random() * 20) + 1, breed: 'Poodle', gender: 'Female', picture01: 'https://image.petmd.com/files/inline-images/standard-poodle.jpg?VersionId=1Pjx5emdAPxmImIlwCR0tX3HXxxm_NhT', createdAt: new Date(), updatedAt: new Date() })
    await Animals.create({ name: 'Charlie', description: '', age: Math.floor(Math.random() * 20) + 1, breed: 'Bulldog', gender: 'Male', picture01: 'https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-168620477-e1691273341205.jpg?w=1024', createdAt: new Date(), updatedAt: new Date() })
    //cats
    await Animals.create({ name: 'Luna', description: 'Elegant and affectionate.', age: Math.floor(Math.random() * 20) + 1, breed: 'Siamese', gender: 'Female', picture01: 'https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg?w=3840&q=75&auto=format', createdAt: new Date(), updatedAt: new Date() })
    await Animals.create({ name: 'Oliver', description: 'Quiet and sweet-natured.', age: Math.floor(Math.random() * 20) + 1, breed: 'Persian', gender: 'Male', picture01: 'https://img.cutenesscdn.com/640/clsd/getty/9d63ea7f7bd0464b8ebcf42a5d6b8a45', createdAt: new Date(), updatedAt: new Date() })
    await Animals.create({ name: 'Leo', description: '', age: Math.floor(Math.random() * 20) + 1, breed: 'Maine Coon', gender: 'Male', picture01: 'https://image.petmd.com/files/styles/978x550/public/2023-04/Maine-coon-cat.jpg?w=2048&q=75', createdAt: new Date(), updatedAt: new Date() })
    await Animals.create({ name: 'Milo', description: '', age: Math.floor(Math.random() * 20) + 1, breed: 'Bengal', gender: 'Male', picture01: 'https://www.aspcapetinsurance.com/media/2360/bengal-cat-facts.jpg', createdAt: new Date(), updatedAt: new Date() })
    await Animals.create({ name: 'Lily', description: '', age: Math.floor(Math.random() * 20) + 1, breed: 'Ragdoll', gender: 'Female', picture01: 'https://www.thesprucepets.com/thmb/17UY4UpiMekV7WpeXDziXsnt7q4=/1646x0/filters:no_upscale():strip_icc()/GettyImages-145577979-d97e955b5d8043fd96747447451f78b7.jpg', createdAt: new Date(), updatedAt: new Date() })
    //exotics
    await Animals.create({ name: 'Raja', description: 'Majestic and powerful.', age: Math.floor(Math.random() * 20) + 1, breed: 'Tiger', gender: 'Male', picture01: 'https://images.pexels.com/photos/64152/tiger-cub-tiger-cub-big-cat-64152.jpeg?cs=srgb&dl=pexels-pixabay-64152.jpg&fm=jpg', createdAt: new Date(), updatedAt: new Date() })
    await Animals.create({ name: 'Leo', description: 'Brave and strong.', age: Math.floor(Math.random() * 20) + 1, breed: 'Lion', gender: 'Male', picture01: 'https://www.lpzoo.org/wp-content/uploads/2023/03/IMG_3295-2048x1520-1-750x557.jpeg', createdAt: new Date(), updatedAt: new Date() })
    await Animals.create({ name: 'Kiki', description: '', age: Math.floor(Math.random() * 20) + 1, breed: 'Parrot', gender: 'Female', picture01: 'https://static.bimago.pl/mediacache/catalog/product/cache/3/6/129163/image/750x1120/bb8426ff382faa4f6642966567bb457c/129163_6.jpg', createdAt: new Date(), updatedAt: new Date() })
    await Animals.create({ name: 'Nala', description: '', age: Math.floor(Math.random() * 20) + 1, breed: 'Leopard', gender: 'Female', picture01: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp19vtgnNUAti7yXgJEUX2OJxxerwVQVhrcA&usqp=CAU', createdAt: new Date(), updatedAt: new Date() })
    await Animals.create({ name: 'Zara', description: '', age: Math.floor(Math.random() * 20) + 1, breed: 'Zebra', gender: 'Female', picture01: 'https://nationalzoo.si.edu/sites/default/files/newsroom/20220421-tarabuk-zebra-yipes-014.jpg', createdAt: new Date(), updatedAt: new Date() })
}

module.exports = {syncDb}
