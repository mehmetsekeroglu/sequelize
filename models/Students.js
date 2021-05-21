module.exports = (sequelize, Sequelize) => {
    const StudentsMS = sequelize.define("StudentsMS", {
      
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      }
    });
   
    return StudentsMS;
  };
