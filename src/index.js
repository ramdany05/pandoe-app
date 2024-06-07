// src/index.js
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const feedRoutes = require('./routes/feedRoutes');
require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/feed', feedRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
