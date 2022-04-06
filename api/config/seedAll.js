const EventModel = require("../models/Events");
const events = require("../utils/fakeEvents");
const mongoose = require("mongoose");
const CategoryModel = require("../models/Category");
const UserModel = require("../models/User");
const categories = require("../utils/categories");
const ComentModel = require("../models/Coments");
const coments = require("../utils/coments");

const seedDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://clubdelplan:clubdelplan123@clubdelplan.kf2p2.mongodb.net/clubdelplan"
    );

    const fakeUser = await UserModel.create({
      name: "clubdelplan",
      password: "Hola1234",
      email: "clubdelplan@gmail.com",
      city: "Plataforma 5",
    });

    //console.log("FAKE USER", fakeUser);
    for (const coment of coments) {
      coment.userName = fakeUser.name;
    };
    const createdComents = await ComentModel.insertMany(coments);
    console.log("COMENTARIOS->", createdComents);


    const createdCategories = await CategoryModel.insertMany(categories);
    for (const event of events) {
      const category = createdCategories.find(
        (category) => category.categoryName === event.category
      );
      event.category = category.categoryName;
      event.eventOwner = fakeUser._id;
      for (let i = 0; i < createdComents.length; i++) {
        event.coments = createdComents[i]
      }
    };

    await EventModel.insertMany(events);

    //console.log("EVENTOS", events);

    console.log("seed finalizado");
    process.exit(0); // --> p que finalice el proceso
  } catch (error) {
    console.log(error);
  }
};

seedDb();
