import express from "express";
//const express = require('express'); //main
//const mongoose = require('mongoose'); //main
import mongoose from "mongoose";
//const bcrypt = require('bcrypt'); // main
//import bcrypt from 'bcrypt'; //main
//const cors = require('cors'); //main
import cors from "cors"; //just added

const app = express();

const PORT = process.env.PORT || 3001; // Use the PORT environment variable or default to 3000
// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true})); //just added
app.use(cors());

// Set the strictQuery option
mongoose.set('strictQuery', false);


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/loginApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Define the user schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Define the user model
const User = mongoose.model('User', userSchema);

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ username });

    //if (user) {
      // Compare the provided password with the stored password directly
      if (user && user.password === password) {
        res.json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Login failed' });
      }
    //} else {
      //res.status(401).json({ message: 'Login failed' });
    //}
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



//Create a new user endpoint
app.post('/api/users', async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = new User({
      username,
      password,
    });

    await newUser.save();

    res.json({ message: 'User created successfully' });
  } catch (error) {
    console.error('User creation error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

  
  
  
  
  
  //Create a new user endpoint
  
  // Define a simple GET route
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

 // Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
