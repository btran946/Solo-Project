const mongoose = require('mongoose');
const MONGO_URI =
  'mongodb+srv://brntrn:sAs248get@cluster1.4rei6ef.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'TodoListProject',
  })
  .catch((err) => console.log(err));

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const Schema = mongoose.Schema;

const accountsSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const todoListSchema = new Schema({
  todoList: [
    {
      content: String,
      completed: Boolean,
      id: Number,
    },
  ],
});

module.exports = mongoose.model('Accounts', accountsSchema);
