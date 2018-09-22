const mongoose = require('mongoose');
const option = {

  useNewUrlParser: true
};
mongoose.connect('mongodb://localhost:27017/TodoApp2',option);
mongoose.Promise=global.Promise;

module.exports={
  mongoose
};
