const express = require("express");
const app = express();
const db = require("./models");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
//const studentsRouter = require('./routes/studentsRouter')

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router
//app.use("/students", studentsRouter);

app.get('/', (req, res) => {
    res.send('Merhaba')
})

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`listening on: http://localhost:${PORT}`);
    });
  });
  

