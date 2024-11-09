const express = require("express");
const userController = require("../controllers/userController");
const recipeController = require("../controllers/recipeController");
const commentController = require("../controllers/commentController");
const router = express.Router();

/* User Routes (CRUD) */
router.route("/users").get(userController.getAllUsers).post(userController.createUser);
router
 .route("/users/:id")
 .get(userController.getUser)
 .put(userController.updateUser)
 .delete(userController.deleteUser);


/* Recipe Routes (CRUD) */
router.route("/recipes").get(recipeController.getAllRecipes).post(recipeController.createRecipe);
router
 .route("/recipes/:id")
 .get(recipeController.getRecipe)
 .put(recipeController.updateRecipe)
 .delete(recipeController.deleteRecipe);

 /* Comment Routes (CRUD) */
router.route("/comments").get(commentController.getAllComments).post(commentController.createComment);
router
 .route("/comments/:id")
 .get(commentController.getAllCommentsByRecipeId)
 .put(commentController.updateComment)
 .delete(commentController.deleteComment);


 module.exports = router;