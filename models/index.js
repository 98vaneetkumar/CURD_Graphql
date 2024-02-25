var Sequelize = require("sequelize");
var sequelize = require("../dbConnection").sequelize;
module.exports = {
  user: require("./user")(Sequelize, sequelize, Sequelize.DataTypes),
};