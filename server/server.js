var {ObjectID}=require('mongodb');
const {mongoose} = require('./db/mongoose');
var {Todo}  = require('./models/todo');
var {Users}=require('./models/user');
const express = require('express');
const bodyparser = require('body-parser');
var app=express();
app.use(bodyparser.json());


app.post('/todos',(req,res)=>{
  var user1=new Users({
    Email:req.body.Email
  });

  user1.save().then((doc)=>{
    console.log(doc);
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});
app.get('/todos',(req,res)=>{
  Users.find().then((users)=>{
    res.send({users});
  });
});

app.get('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id)){
  return res.status(404).send();
  }
  Users.findById(id).then((user)=>{
    if(!user){ res.status(404).send();}
    else{
    res.send({user});}
  },(e)=>{
    res.status(400).send();
  });
});


app.listen(3000);
module.exports={app};
// const mongoose = require('mongoose');
// const option = {
//
//   useNewUrlParser: true
// };
// mongoose.connect('mongodb://localhost:27017/TodoApp2',option);
//
// var Todo=mongoose.model('Todo',{
//   name:{type:String},
//   completed:{type:Boolean},
//   completedAt:{type:Number}
//
// });
// var todo=new Todo({
//   name:'reqbodytext'
// });
//
// todo.save().then((doc)=>{
//   //res.send(doc);
//   console.log(doc);
// },(e)=>{
//   //res.status(400).send(e);
//   console.log('sssssssssssssssssss');
//
// });
