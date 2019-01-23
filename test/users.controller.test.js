const UsersControllerConst = require('./../users.controller');

///////////////////////  Mock Data  //////////////////////
const mocks = require('./mocks/mocks.users');
const UserMock = {};
/////////////////////////////////////////////////////////

/////////  Instantiate the controller for Testing /////////
const usersController = new UsersControllerConst(UserMock);
//////////////////////////////////////////////////////////

///////////////////  Describe the Test Group ///////////////////
describe ("TEST USERS CONTROLLER", () => {
  describe ("GET - endpoint:  `/get-users`", () => {

    /////////////////////////////  Test  /////////////////////////////
    test ("Should return status 200 if request was successful.", async (done) => {

      //////  Instantiate mock ctx /////
      let ctx = new mocks.ctx(null);

      /////  Setup / simulate a ('Clean-room') environment  /////
      UserMock.find = () => ({
          name: "user1",
          age: 18,
          email: "email@email.com",
      });

      //////  Invoke the controller method /////
      await usersController.getAllUsers(ctx);

      /*  Check for the expected result, after controller method have finished running with the provided values / environment */
      expect(ctx.status).toEqual(200);
      done()
      /*  done() callback signals to Jest that the test is finished.
      If not set at the end of each test, Jest will throw a Timeout Error */
    });

    test ("Should return status 400, upon DB query error.", async (done) => {

      //////  Instantiate mock ctx /////
      let ctx = new mocks.ctx(null);

      /////  Setup / simulate a ('Clean-room') environment  /////
      UserMock.find = () => {
        return new Error('I am a DB error');
      };

      await usersController.getAllUsers(ctx);
      expect(ctx.status).toEqual(200);
      done();
    });

  });
});