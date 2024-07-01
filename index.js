// API ENDPOINT: "https://a9b7ry4ty1.execute-api.ap-south-1.amazonaws.com/"

require('dotenv').config();
const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/route');
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MONGODB Connection seccessfull");
})
.catch((e) => {
    console.log("Connection failed", e);
})

app.use('/api', itemRoutes);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});


module.exports.handler = serverless(app);
