const express = require('express');
const app = express();

const mongoose = require('mongoose');

const dburl="mongodb+srv://shubhamkrsingh0109:4vjsvZRcqKd5Udcy@cloak0109.ydnucal.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cloak0109";

const products=[
    {id: 1, name: "apple"},
    {id: 2, name: "banana"},
    {id: 3, name: "charizard"},
]

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  
    brand: {
      type: String,
      required: true,
    },
  
    category: {
      type: String,
      required: true,
    },
  }, { timestamps: true });
  
const productModel = mongoose.model('products', productSchema);


mongoose.connect(dburl).then((function() {
    console.log("connected to db");
})).catch(err => console.log(err));

app.get('/api/products', async (req, res) =>{
    let products = await productModel.find();
    res.json(products);
})

//create server
app.listen(3000,() =>{
    console.log("server is connected");
})