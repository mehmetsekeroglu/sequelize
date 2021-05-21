
const studentsRepository = require("./Repo/students-repository");



// module.exports = async function getAllStudents(){
//     return await studentsRepository.getAll();
//   }

async function getAllStudents(){
    return await studentsRepository.getAll();
  }

exports.getAllStudents()