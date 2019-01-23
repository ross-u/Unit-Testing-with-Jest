//////  Controller Constructor class /////
class UsersControllerConst {
  /* Provide the DB Model or Mock data during the instantiation of the controller */
  constructor(UserDataModel) {
    this.UserDataModel = UserDataModel;

    //  Bind context of the controller methods
    this.getAllUsers = this.getAllUsers.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  async getAllUsers (ctx) {
    try {
      ctx.body = await this.UserDataModel.find({});  // await data from DB
      ctx.status = 200;
    } catch (error) {
      console.log(error);
      ctx.status = 400;
    }
  };
  
  async createUser (ctx) {
    try {
      // get data from the `ctx.request.body`
      let createdUser = await this.UserDataModel.create(ctx.request.body);
      ctx.body = createdUser;
      ctx.status = 201;
    } catch (error) {
      console.log(error);
      ctx.status = 400;
    }
  };
};

///  Export the controller constructor ///
module.exports = UsersControllerConst;

///  1. Instantiate controller in the `router.js` for the acctual DB connection  ///
///  2. Instantiate controller in the `user.controller.test.js` for the Unit Tests  ///

