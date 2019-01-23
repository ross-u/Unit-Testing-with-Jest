// db.js
const mongoose = require('mongoose');
const { DBNAME } = require('./../config.js');

// Create a connection to the database named `DB_NAME`
mongoose.connect(`mongodb://localhost/${DBNAME}`, (err) => {
  if (err) return console.log(err);
  else console.log(`Connected to the Mongo database.`);
});

// Export the database connection 
module.exports = mongoose;