const Users = require('./Models');

const usersController = {};

usersController.addUser = async (req, res, next) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    if (username && password) {
      const user = await Users.create(req.body);
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
    const userFound = await Users.findOne({ username });
    if (!userFound) {
      console.log('user not found in database');
      res.redirect('http://localhost:3000/');
    } else {
      if (userFound.password === password) {
        res.locals.userFound = userFound;
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
    const foundUser = await Users.findOne({ username }).exec();
    res.locals.foundUser = foundUser;
  } catch (err) {
    console.log('ERROR occured in users.Controller.getUser');
    return next({ err });
  }
};

module.exports = usersController;
