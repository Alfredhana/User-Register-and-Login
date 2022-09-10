// Import external start
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const dotEnv = require("dotenv");
const cors = require("cors");
const bcrypt = require('bcryptjs');

dotEnv.config();

const routesURLs = require('./routes/routes.js')
const registerModule = require("./modules/userModule");
// Import external End

// Connect Database
mongoose.connect(process.env.DATABASE_ACCESS)
.then((result) =>{
    console.log("Database Started")
})
.catch((error) =>
    console.log("error connecting to mongodb :", error.message)
);
let db = mongoose.collection;
let userTable = mongoose.model("user");

const app = express();

// Application Configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); // Invoke Json to activate body parser
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Enable All CORS Requests
app.use(express.static(path.resolve(__dirname, '../client/build')))
// app.get("/*", (request, response) => {
//     response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
// })

app.post("/register", async (request, result) => {
    const { fullName, userName, password, email } = request.body;

    const encryptedPassword = await bcrypt.hash(password, 10);

    try{
        const oldUser = await userTable.findOne({email});

        if (oldUser){
            return result.json({error: "User already Exists"});
        }

        await userTable.create({
            fullName: fullName,
            userName: userName,
            password: encryptedPassword,
            email: email,
        });

        result.json({status: "Registered Successfully"});
    }
    catch (error){
        result.json({status: "Registered error: " + error.message});
    }
})

//app.get('/signin', (req, res) => {
    // response.json({"Result": "Signin Success"});
//});

// Start Application
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Started at " + PORT);
})