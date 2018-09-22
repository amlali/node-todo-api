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
//delete all users with ane amal ali
db.collection('Users').deleteMany({name:'amal ali'}).then((result)=>{
  console.log(result);
});

//delete one user with name mike
// db.collection('Users').deleteOne({name:'mike'}).then((result)=>{
//    console.log("mike is deleted");
// });

//delete one with id uses find and deleted
// db.collection('Users').findOneAndDelete({_id: new ObjectID('5ba581ac52fcf3807de36305')});
db.close();
});
