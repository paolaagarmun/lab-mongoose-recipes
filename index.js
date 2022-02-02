const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

let newRecipe = {
  title: "Chocolate Chip Cookies",
  level: "Amateur Chef",
  ingredients: [
    "1/2 cup light brown sugar",
    "1 large egg",
    "2 tablespoons milk",
    "1 1/4 teaspoons vanilla extract",
    "2 cups semisweet chocolate chips"
  ],
  cuisine: "French",
  dishType: "dessert",
  image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4398987.jpg&w=596&h=399.32000000000005&c=sc&poi=face&q=85",
  duration: 30,
  creator: "Chef Jennifer"
}

// Recipe.create(newRecipe)
// .then(result=>console.log(`recipe created: ${result.title}`))
// .catch(err => console.log(err)) 


Recipe.insertMany(data)
.then(result => {
  result.forEach(recipe=>console.log(`${recipe.title} added`))
})
.catch(err=> console.log(err))

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
