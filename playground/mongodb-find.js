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
//get all useers with name amal
db.collection('Users').find({name:'amal ali'}).toArray().then((res)=>{

  console.log('Users:');
  console.log(JSON.stringify(res,undefined,2));
},(err)=>{
  console.log(`enable to find Users with Name amal`);
});
db.close();
});
