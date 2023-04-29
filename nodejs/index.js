const express=require('express');
const bodyParser=require('body-parser')
const {mongoose} = require('./db.js');
const app=express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var employeeController = require('./controllers/employeecontroller.js');
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000,()=>{
  console.log('server started at port : 3000');
})
app.use('/employees', employeeController);
