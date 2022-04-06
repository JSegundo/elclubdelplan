const EventModel = require("../models/Events");
const events = require("../utils/fakeEvents");
const mongoose = require("mongoose");
const CategoryModel = require("../models/Category");
const UserModel = require("../models/User");
const categories = require("../utils/categories");

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

    const createdCategories = await CategoryModel.insertMany(categories);

    for (const event of events) {
      const category = createdCategories.find(
        (category) => category.categoryName === event.category
      );
      event.category = category.categoryName;
      event.eventOwner = fakeUser._id;
      event.coments = {
        userName: fakeUser.name,
        vote: 5,
        coment: "muy bueno"
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
