const Router = require('koa-router');
const router = new Router();
const UsersControllerConst = require('./users.controller');

/////////////////  Database  /////////////////
const UsersModel = require('./models/Users');
//////////////////////////////////////////////


/////////////////////  Inject DB Model  /////////////////////
const usersController = new UsersControllerConst(UsersModel);

router.get('/get-users', usersController.getAllUsers);
router.post('/add-user', usersController.createUser);

module.exports = router;