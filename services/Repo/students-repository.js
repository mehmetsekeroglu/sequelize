const db = require("./index");

module.exports= async function getAll(){
    return await db.students.findAll();
  }