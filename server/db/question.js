const Sequelize = require("sequelize");
const db = require("./database");

const Question = db.define("question", {
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  incorrect: {
    type: Sequelize.TEXT,
    defaultValue:
      "https://media.foxbusiness.com/BrightCove/854081161001/202004/1495/854081161001_6153242466001_6153242152001-vs.jpg",
  },
  correct: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Question;
