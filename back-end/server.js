const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import CORS
require("dotenv/config")
const User=require("./models/user-schema")
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.DB_URI)
.then(()=>console.log("MongoDB database connected!"))
.catch(error=>console.log(error))

app.get('/',async(req,res)=>{
  res.send('Hello World!')
})
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
