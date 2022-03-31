const CategoryService = require("../services/categoriesServices");

class CategoryController{

  static async getAllCategory (req, res, next) {
    const categories = await CategoryService.serviceGetAllCategories(req, next);
    return categories ? res.json(categories) : res.sendStatus(404);
  }

  
 static async getOneCategory(req, res, next){
    const category = CategoryService.serviceGetOne(req, next);
    return res.send(category);
  };

}

module.exports= CategoryController;