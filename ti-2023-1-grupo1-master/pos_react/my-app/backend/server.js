const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

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
  passwordHash: String,
});

// Define the user model
const User = mongoose.model('User', userSchema);

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  console.log('Received username:', username);
  console.log('Received password:', password);

  
  try {
    // Find the user in the database
    const user = await User.findOne({ username });

    

    if (user) {
      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);

      
      
      if (passwordMatch) {
        res.json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Login failed' });
      }
    } else {
      res.status(401).json({ message: 'Login failed' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});





// Register endpoint
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Generate a hash for the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = new User({ username, passwordHash });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.get('/api/csv', (req, res) => {
  // Handle the GET request for the '/api/csv' endpoint
  // Retrieve the CSV data and send it back in the response
  // You can replace this with your own logic
  const csvData = 'Sample CSV data';
  res.send(csvData);
});

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!'); // or any other response you want to send
});


// Start the server
app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
