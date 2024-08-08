const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')
const app = express();
const PORT = process.env.PORT || 3001;
dotenv.config()
// Connect to MongoDB
const connectToDb = async()=>{
    try{
        await mongoose.connect(`mongodb+srv://Thanmai:${process.env.SECRET_KEY}@cluster0.6leylld.mongodb.net/ecommerce?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        console.log(("connected to db"))
    }catch(error){
        console.log(error.message);
    }
}
connectToDb();
// Middleware
app.use(express.json());
app.use(cors());
// Product model
const Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: Number,
});

// Endpoints
app.get('/products', async (req, res) => {
    try{
        console.log("TTTTTTT")
  const products = await Product.find({});
  console.log(products)
  res.json(products);}
  catch(error){
    console.log(error);
  }
});

app.post('/products', async (req, res) => {
    try{
  const { name, description, price } = req.body;
  console.log("add product :",name ,description, price)
  const newProduct = new Product({ name, description, price });
  await newProduct.save();
  res.status(201).json(newProduct);
    }catch(error){
        console.log(error);
    }
});

app.delete('/products/:id', async (req, res) => {
    try{
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.sendStatus(204);}
  catch(error){
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});