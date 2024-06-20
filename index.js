const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dburl="mongodb+srv://shubhamkrsingh0109:4vjsvZRcqKd5Udcy@cloak0109.ydnucal.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cloak0109";
const productRoutes = require("./routes/productRoutes");

app.use(express.json());//middleware

// middleware takes a req then change its format as per you requirement.
// const products=[
//     {id: 1, name: "apple"},
//     {id: 2, name: "banana"},
//     {id: 3, name: "charizard"},
// ]

mongoose.connect(dburl).then((function() {
    console.log("connected to db");
})).catch(err => console.log(err));

app.use("/api/products", productRoutes);

//create server
app.listen(3000,() =>{
    console.log("server is connected");
})