const express = require("express");
const mySQL = require("mysql");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "loginSystem"
})

app.post("/register", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO users ( username, password) VALUES (?, ?)", 
        [username, password]
    );
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Started");
})