//const MongoClient = require('mongodb').MongoClient;
//destractioning make new vavible from object
const {MongoClient,ObjectID} = require('mongodb');
var obj=new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
  return console.log('unable to connect to mongodb');
  }
  console.log('connect to mongodb');
  // db.collection('Todos').insertOne({
  //   text:'something to do',
  //   completed:false
  // },(err,res)=>{
  //   if(err){
  //   return console.log('uable to insert',err);
  //   }
  //   else {
  //     console.log(JSON.stringify(res.ops,undefined,2));
  //   }
  //add new collection&insert new doc
  // db.collection('Users').insertOne({
  //   name:'amal ali',
  //   age:22,
  //   location:'cairo egypt'
  // },(err,res)=>{
  //   if(err){
  //     return console.log('uable to insert',err);}
  // else {
  //   console.log(JSON.stringify(res.ops,undefined,2));
  // }
  // });
db.close();
});
