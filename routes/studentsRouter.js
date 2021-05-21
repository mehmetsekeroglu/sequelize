
const router = require("express").Router();
const studentService = require("../services/student-service");



module.exports = router.get('/', async function(req, res, next) {
        const allStudents = await studentService.getAllStudents()
        res.send(allStudents);
        
      });

     