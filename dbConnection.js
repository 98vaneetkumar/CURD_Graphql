const Sequelize = require("sequelize");
var sequelize = new Sequelize(
    "test2",
    "root",
    "Vaneet5509@",
  {
  host: "localhost",
  
  dialect: "mysql",
  logging: false,
  raw:true
});

var connectDB = () => {
  sequelize
    .authenticate()
    .then(() => {
      sequelize.sync({ alter: false });
      console.log("Connected Successfully");
    })
    .catch((err) => {
      console.log("Sequelize Connection Error:  ", err);
    });
};

module.exports = {
  sequelize: sequelize,
  connectDB: connectDB,
};