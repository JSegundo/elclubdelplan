const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  categoryName: { type: String },
});

const CategoryModel = model("Category", CategorySchema);

module.exports = CategoryModel;
