const Users = require('./Models');

const usersController = {};

usersController.addUser = async (req, res, next) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    if (username && password) {
      console.log('username/password exist');
      //   const newUser = new Users(req.body);
      //   await newUser.save((err, car) => {
      //     if (err) console.log('could not save');
      //   });
      await Users.create(req.body);
      console.log('user saved');
      return next();
    } else throw 'ERROR in addUser';
  } catch (err) {
    return next({ err });
  }
};

usersController.verifyUser = async (req, res, next) => {
  // write code here
  const { username, password } = req.body;
  if (!username || !password)
    return next('Missing username or password in usersController.verifyUser');
  try {
    const userFound = await Users.findOne({ username }).exec();
    if (!userFound) {
      console.log('user not found in database');
      res.redirect('http://localhost:3000/');
    } else {
      res.locals.userFound = userFound;
      return next();
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
