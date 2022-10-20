const mongoose = require('mongoose');
const MONGO_URI =
  'mongodb+srv://brntrn:sAs248get@cluster1.4rei6ef.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'TodoListProject',
  })
  .then(() => console.log('Connected to Mongo DB'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const accountsSchema = new Schema({
  username: String,
  password: String,
});

const Accounts = mongoose.model('accounts', accountsSchema);

const todoListSchema = new Schema({
  todoList: [
    {
      content: String,
      completed: Boolean,
      id: Number,
    },
  ],
});

module.exports = { Accounts };
