const AppError = require("../utils/appError");
const conn = require("../services/db");

exports.getAllUsers = (req, res, next) => {
    conn.query("SELECT * FROM users", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };

exports.createUser = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));

    const { name, nickname, email, password } = req.body;

    conn.query(
    "INSERT INTO users (name, nickname, email, password) VALUES (?, ?, ?, ?)",
    [name, nickname, email, password],
    function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
        status: "success",
        message: "User created!",
        });
    }
    );
};

exports.getUser = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No user id found", 404));
    }
    conn.query(
      "SELECT * FROM users WHERE id = ?",
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

exports.updateUser = (req, res, next) => {
    const { id } = req.params;
    const { name, nickname, email, password } = req.body;

    if (!req.params.id) {
        return next(new AppError("No user id found", 404));
    }
    conn.query(
    "UPDATE users SET name = ?, nickname = ?, email = ?, password = ? WHERE id = ?",
    [name, nickname, email, password, id],
    function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        
        res.status(201).json({
        status: "success",
        message: "user updated!",
        });
    }
    );
};

exports.deleteUser = (req, res, next) => {
    if (!req.params.id) {
      return next(new AppError("No user id found", 404));
    }
    conn.query(
      "DELETE FROM users WHERE id=?",
      [req.params.id],
      function (err, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "User deleted!",
        });
      }
    );
   }