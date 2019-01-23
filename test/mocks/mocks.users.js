/* Mock `ctx` object used for controller testing.
It enables us to pass the request values or test the returned
reponse body and status */
class ctx {
  constructor(data) {
    this.params = {};
    this.request = {
      body: {}
    }
    this.status = 400;
    this.data = data;
  }
};

module.exports.ctx = ctx;