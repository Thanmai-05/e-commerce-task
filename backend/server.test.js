const request = require('supertest');
const {app,Product,closeServer} = require('./server');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

// Connect to the test database
let server;
beforeAll(async () => {
  await mongoose.connect(`mongodb+srv://Thanmai:${process.env.SECRET_KEY}@cluster0.6leylld.mongodb.net/ecommerce?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
});

afterAll(async () => {
    await closeServer()
  await mongoose.disconnect();
});

describe('Product API', () => {
  // Test the GET /products endpoint
  describe('GET /products', () => {
    it('should return a list of products', async () => {
      const response = await request(app).get('/products');
      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.any(Array));
    });
  });

  // Test the POST /products endpoint
  describe('POST /products', () => {
    it('should create a new product', async () => {
      const newProduct = {
        name: 'Test Product',
        description: 'This is a test product',
        price: 9.99,
      };

      const response = await request(app)
        .post('/products')
        .send(newProduct);

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject(newProduct);
    });
  });

  // Test the DELETE /products/:id endpoint
  describe('DELETE /products/:id', () => {
    it('should delete a product', async () => {
      // Create a new product to test the delete endpoint
      const newProduct = new Product({
        name: 'Test Product',
        description: 'This is a test product',
        price: 9.99,
      });
      await newProduct.save();

      const response = await request(app).delete(`/products/${newProduct._id}`);
      expect(response.status).toBe(204);

      // Verify that the product was deleted
      const deletedProduct = await Product.findById(newProduct._id);
      expect(deletedProduct).toBeNull();
    });
  });
});