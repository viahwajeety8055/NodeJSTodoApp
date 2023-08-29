const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

const router = require('./router/todoRouter');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure cors with specific origins and headers
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow sending cookies with requests
    optionsSuccessStatus: 204, // No content status for preflight requests
};

app.use(cors(corsOptions)); // Apply the CORS configuration here

app.use("/api/v1/todos",router);

app.listen('5000', () => {
    console.log('Server is listening....');
});
