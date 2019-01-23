const mongoose = require('./db');

// Schema constructor
const Schema = mongoose.Schema;

// Schema creates a blueprint for the new or current Mongo Collection.
// If Collection doesn;t exist, MongoDB will create one with the given name after inserting the first document.
const UsersSchema = new Schema(
  {
    name: { type: String, default: '' },
    age: { type: Number, default: 18 },
    email: { type: String, default: 0 },
    created: { type: String, default: Date.now },
  }
);

const Users = mongoose.model('Users', UsersSchema );

// Export the Model to be used for querying the database.
module.exports = Users;