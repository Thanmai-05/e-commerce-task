# MERN Stack E-commerce Application

This is a simple e-commerce application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to view, add, and delete products.

## Features

- View a list of products
- Add new products
- Delete existing products

## Technologies Used

- MongoDB: Database
- Express: Backend framework
- React: Frontend library
- Node.js: Runtime environment
- Render: Cloud platform for deployment

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB

### Installation

1. Clone the repository:
https://github.com/Thanmai-05/e-commerce-task

2. Install backend dependencies:
cd backend
npm install

3. Install frontend dependencies:
cd ../frontend
npm install

### Running the Application Locally

1. Start the backend server:
cd backend
npm start
2. In a new terminal, start the frontend development server:
cd frontend
npm start
3. Open your browser and navigate to `http://localhost:3000`

## Deployment

This application is deployed on Render. You can access it at:

- Frontend: (https://e-commerce-task-frontend.onrender.com)
- Backend: (https://e-commerce-task-backend-rsr6.onrender.com)

## API Endpoints

- GET /products: Fetch all products
- POST /products: Add a new product
- DELETE /products/:id: Delete a product by ID

## Environment Variables

Make sure to set the following environment variables:

Backend:
- `MONGODB_URI`: MongoDB connection string

Frontend:
- `REACT_APP_BACKEND_URL`: URL of the deployed backend service

## Testing

To run the unit tests for the backend API:
cd backend
npm test

## Future Improvements

- Add user authentication
- Implement product categories
- Add a shopping cart feature
- Improve UI/UX design

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
