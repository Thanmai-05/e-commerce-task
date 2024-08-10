import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: 0 });

  useEffect(() => {
    fetchProducts();
  });

  const fetchProducts = async () => {
    try {
    const response = await axios.get(`${BACKEND_URL}/products`);
    setProducts(response.data);
    console.log("products: ",response.data)}
    catch (error) {
      console.error(error);
      }
  };

  const addProduct = async () => {
    console.log("hiiiiiiiiii")
    try{
    await axios.post(`${BACKEND_URL}/products`, newProduct);
    setNewProduct({ name: '', description: '', price: 0 });
    fetchProducts();
    }catch(error){
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
    await axios.delete(`${BACKEND_URL}/products/${id}`);
    fetchProducts();
    } catch (error) {
      console.error(error);
      }
  };

  return (
    <div className='container'>
      <header>
      <h1>E-commerce Application</h1>
      </header>
        
      <div className="product-form">
        <h2>Add Product</h2>
        <label>Product Name</label>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <label>Product Description</label>
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <label>Price</label>
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button onClick={addProduct}>Add</button>
      </div>
      <div className="product-list">
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              {product.name} - {product.description} - ${product.price}
              <button onClick={() => deleteProduct(product._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;