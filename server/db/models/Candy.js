const Sequelize = require("sequelize");
const db = require("../database");
// import getRandomImg from '.../seed'

module.exports = db.define("candy", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "http://www.ocsaccess.com/admin/clientfiles/ucsne/images/xlarge/mm%20choc.jpg"
  }
});

// defaultValue: function() {
//   return getRandomImg();
// }
