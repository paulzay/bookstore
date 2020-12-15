const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require('./models/book');

const app = express();
const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/user');

// const url = process.env.MONGODB_URI || "mongodb://localhost:27017/bookstore";
//'mongodb+srv://paul:ka21mZEU9ZKHJPq3@cluster0.woxph.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect("mongodb://localhost:27017/bookstore",{
    useNewUrlParser: true 
  })
  .then(() => {
    console.log('success boii')
  }).catch(() => {
    console.log('you fucked up')
  })

app.use(bodyParser.json());
app.use('/api/', bookRoutes);
app.use('/api/auth', userRoutes);


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
})

module.exports = app;