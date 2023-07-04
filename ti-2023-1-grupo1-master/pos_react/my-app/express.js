
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Login endpoint
app.post('/api/login', async(req, res) => {
  try {
  const { username, password } = req.body;
  // Add your authentication logic here
  // For simplicity, let's assume the correct username is 'aluno' and password is '@cefet'
 // if (username === 'Aluno' && password === '@cefet') {
    //res.json({ message: 'Login successful' });
  //} else {
    //res.status(401).json({ message: 'Login failed' });
  //}

// Make a POST request to the backend server for authentication
const response = await axios.post('http://localhost:3001/api/login', {
  username,
  password
});

// Forward the response from the backend to the frontend
res.json(response.data);
} catch (error) {
console.error('Login error:', error.response.data);
res.status(500).json({ message: 'Internal server error' });
}




});

// Start the server
app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
