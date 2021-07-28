import express, { request } from 'express';
import chalk from 'chalk';
import bodyParser from'body-parser';
import mongoose from 'mongoose';
import MONGOURI from './config/db';
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(MONGOURI.MONGOURI,{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true
});
mongoose.connection.on("connected",()=>{
    console.log("mongodb to connect successfuly");
})
mongoose.connection.on("error",(error:string)=>{
    console.log("error",error);
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
//models
const User = require('./models/user');

//api
const user = require('./routes/user');

app.use(user);

app.listen(5000,()=>{
    console.log(chalk.bgMagenta("server runing:"),PORT);
})
