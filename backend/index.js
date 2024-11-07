const port = 4000;
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const UserController = require("./Controller/UserController")
app.use(express.json());

const uri = "mongodb+srv://ayush:1289@cluster0.eewmd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("MongoDB connection error:", error));

app.listen(port, (error) => {
    if (!error) {
        console.log("Server is running on port " + port);
    } else {
        console.log("Error:" + error);
    }
});