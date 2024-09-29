const express = require("express");
const app = express();
const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "your_password",
    database: "tastefolio_database"
})

app.get("/", (req, res) => {
    let sql = "INSERT INTO users (nome) VALUES ('Arthur')";
    
    db.query(sql, (err, result) => {
        console.log(err)
    });
})

app.listen(8080, () => {
    console.log("Server operando")
});