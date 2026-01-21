require("dotenv").config();
const express= require('express');
const connectDB = require('./config/db');
const routes= require('./routes/routes.js');
const cors= require('cors');

const app= express();
app.use(cors());
app.use(express.json());
app.use('/',routes);

const PORT= 5000;
app.listen(PORT, async()=>{
    try{
        await connectDB();
        console.log("Server running on the port: ", PORT);
    }catch(err){
        console.error("Error while running the server: ",err);
    }
})