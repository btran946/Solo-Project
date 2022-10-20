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
  todoLists: [[{ type: Schema.Types.ObjectId, ref: 'TodoList' }]],
});

// todo: { type: Schema.Types.ObjectId, ref: 'TodoList' },
const Account = mongoose.model('Account', accountsSchema);

const indvidialTodoSchema = new Schema({
  content: { type: String, required: true },
  completed: { type: String, required: true },
  id: { type: Number, required: true },
});

const todoListSchema = new Schema({
  listOfTodoLists: [indvidialTodoSchema],
});

const TodoList = mongoose.model('TodoList', todoListSchema);

module.exports = { Account, TodoList };
