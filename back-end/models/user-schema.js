const mongoose = require("mongoose");

const userSchemaModel = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String, 
});

const Users = mongoose.model('user-table', userSchemaModel);

module.exports = Users;