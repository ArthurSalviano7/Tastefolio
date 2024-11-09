const AppError = require("../utils/appError");
const conn = require("../services/db");

exports.getAllRecipes = (req, res, next) => {
    conn.query("SELECT * FROM recipes", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };

exports.createRecipe = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));

    const { idUser, recipeName, ingredients, method, foodType,
        prepTime, difficulty, imageURL } = req.body;

    conn.query(
    "INSERT INTO recipes (idUser, recipeName, ingredients, method, foodType, prepTime, difficulty, imageURL) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [idUser, recipeName, ingredients, method, foodType, prepTime, difficulty, imageURL],
    function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
        status: "success",
        message: "Recipe created!",
        });
    }
    );
};

exports.getRecipe = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No recipe id found", 404));
    }
    conn.query(
      "SELECT * FROM recipes WHERE id = ?",
      [req.params.id],
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(200).json({
          status: "success",
          length: data?.length,
          data: data,
        });
      }
    );
   };

exports.updateRecipe = (req, res, next) => {
    const { id } = req.params;
    const { idUser, recipeName, ingredients, method, foodType,
        prepTime, difficulty, imageURL } = req.body;

    if (!req.params.id) {
        return next(new AppError("No recipe id found", 404));
    }
    conn.query(
    "UPDATE recipes SET idUser = ?, recipeName = ?, ingredients = ?, method = ?, foodType = ?, prepTime = ?, difficulty = ?, imageURL = ? WHERE id = ?",
    [idUser, recipeName, ingredients, method, foodType, prepTime, difficulty, imageURL, id],
    function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        
        res.status(201).json({
        status: "success",
        message: "recipe updated!",
        });
    }
    );
};

exports.deleteRecipe = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No recipe id found", 404));
    }
    conn.query(
      "DELETE FROM recipes WHERE id=?",
      [req.params.id],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "Recipe deleted!",
        });
      }
    );
   }