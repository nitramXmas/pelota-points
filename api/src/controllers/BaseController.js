class BaseController {
  req;
  res;
  model;

  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  getAll() {
    this.model.getAll().then(([results]) => this.sendJson(results));
  }

  sendJson(data) {
    this.res.status(200).json(data);
  }
}

module.exports = BaseController;