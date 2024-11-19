const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./User');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/userlists", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Corrected API endpoint with leading slash
app.get('/getUsers', (req, res) => {
  UserModel.find()
    .then(userlists => res.json(userlists))
    .catch(err => res.status(500).json(err)); // Improved error handling
});

// Start the server
app.listen(3001, () => {
  console.log('Server started on http://localhost:3001');
});