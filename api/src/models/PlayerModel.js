const BaseModel = require("./BaseModel");

class PlayerModel extends BaseModel {
  queryFields;

  constructor({ fields }) {
    super("players");

    this.init(fields && fialds.split(","));
  }

  init(fields) {
    if (!fields) {
      this.fields.push("*");
    }
  }
}

module.exports = PlayerModel;