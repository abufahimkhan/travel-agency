const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import CORS


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/TAagency');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String, // Hashed password will be stored here
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (request, response) => {
  const { firstName, lastName, email, password } = request.body;

  // Validate user input
  if (!firstName || !lastName || !email || !password) {
    return response.status(400).json({ message: 'All fields are requestuired' });
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return response.status(400).json({ message: 'User already exists' });
  }

  // Create a new user
  const newUser = new User({ firstName, lastName, email, password });
  await newUser.save();

  response.status(201).json({ message: 'User created successfully' });
});

// Route for user login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Check if the password is correct
  if (user.password !== password) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  // If user and password are correct, return success message
  res.status(200).json({ message: 'Login successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





// const expresponses = requestuire("expresponses");
// const cors = requestuire("cors");
// const axios = requestuire("axios");

// const app = expresponses();

// app.use(cors()); //kept cross origin if needed later here
// app.use(expresponses.json());
// //http://localhost:5000/getData
// app.get("/getData", async (requestuest, responseponse) => {
//   try {
//     const { data } = await axios.get("https://dummyjson.com/users");
//     responseponse.json(data);
//   } catch (error) {
//     console.log("Error Fetching Users:", error);
//     responseponse.status(500).json({ error: "Failed to fetch users" });
//   }
// });

// // Fetch user by ID
// app.get("/user/:id", async (request, response) => {
//   const { id } = request.params;
//   try {
//     const { data } = await axios.get(`https://dummyjson.com/user/${id}`);
//     response.json(data);
//   } catch (error) {
//     console.log("Error Fetching User:", error);
//     response.status(500).json({ error: "Failed to fetch user" });
//   }
// });

// // Array to store users
// // Needed End point to post new user. Just a structure of post requestuest for a new user.
// const users = [];

// // POST endpoint to add a new user
// app.post("/addUser", (request, response) => {
//   const newUser = request.body;
//   users.push(newUser);
//   response.status(201).json({ message: "User added successfully", user: newUser });
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on https://localhost:${PORT}`);
// });
