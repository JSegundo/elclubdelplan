const Categories = require("../models/Category");

class CategoryService{
  static async serviceGetAllCategories(req, next){
    try {
      const categories = await Categories.find();
      return categories;
    } catch (err) {
      console.error(err);
      next(err);
    }
  };
  static async serviceGetOneCategory(req, next){
    try {
      const category = await Categories.findById(req.params.id);
      return category;
    } catch (err) {
      console.error(err);
      next(err);
    }
  };
}
module.exports= CategoryService;