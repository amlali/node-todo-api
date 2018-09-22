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


//upadete doc in mongo
db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('5ba5929652fcf3807de3678e')},
{$set:{
  name:'amal ali'
},$inc:{
  age:1
}
},{returnOriginal:false}).then((res)=>{
  console.log(res);
});
db.close();
});
