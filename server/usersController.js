const Users = require('./Models');

const usersController = {};

usersController.addUser = async (req, res, next) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    if (username && password) {
      const user = await Users.Account.create(req.body);

      return next();
    } else throw 'ERROR in addUser';
  } catch (err) {
    return next({
      log: 'Express error handler caught addUser',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

usersController.getIdOfTodoLists = async (req, res, next) => {
  const { username } = req.body;
  const user = await Users.Account.findOne({ username: username });
  const arrOfListId = user.todoLists;
  const idArr = [];
  arrOfListId.forEach((el) => {
    idArr.push(el[0].valueOf());
  });
  const arrOfList = [];
  for (let i = 0; i < idArr.length; i++) {
    const list = await Users.TodoList.findOne({ id: idArr[0] });
    arrOfList.push(list.listOfTodoLists);
  }
  res.locals.arrOfList = arrOfList;
  next();
};

usersController.saveTodoList = async (req, res, next) => {
  const { username, todoList } = req.body;
  console.log(req.body);
  const user = await Users.Account.findOne({ username: username });
  console.log('user found!');
  const newTodoList = new Users.TodoList({ listOfTodoLists: todoList });
  user.todoLists.push(newTodoList);
  await newTodoList.save();
  await user.save();
  console.log('list saved!');
  next();
};

usersController.verifyUser = async (req, res, next) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (!username || !password)
    return next({
      log: 'Express error handler caught verifyUser',
      status: 500,
      message: { err: 'An error occurred' },
    });
  try {
    const userFound = await Users.Account.findOne({ username });
    if (!userFound) {
      console.log('user not found in database');
      res.redirect('http://localhost:3000/');
    } else {
      if (userFound.password === password) {
        res.locals.userFound = userFound;
        console.log(userFound);
        return next();
      } else {
        console.log('password did not match database');
        res.redirect('http://localhost:3000/');
      }
    }
  } catch (err) {
    return next({ err });
  }
};

usersController.getUser = async (req, res, next) => {
  const { username } = req.body;
  try {
    const foundUser = await Users.Account.findOne({ username }).exec();
    res.locals.foundUser = foundUser;
  } catch (err) {
    console.log('ERROR occured in users.Controller.getUser');
    return next({ err });
  }
};

module.exports = usersController;
