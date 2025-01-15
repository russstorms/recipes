// server/server.js

const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Sample recipes data
const recipes = [
  {
    id: 1,
    name: 'Spaghetti Bolognese',
    ingredients: 'Spaghetti, Ground Beef, Tomato Sauce',
  },
  {
    id: 2,
    name: 'Chicken Curry',
    ingredients: 'Chicken, Curry Powder, Coconut Milk',
  },
  {
    id: 3,
    name: 'Vegetable Stir-fry',
    ingredients: 'Broccoli, Carrots, Soy Sauce',
  },
];

// Enable CORS for frontend access
app.use(cors());

// Recipe API endpoint
app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
