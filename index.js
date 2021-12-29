const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

const userRoutes = require('./app/routes/userRoutes');
const boardRoutes = require('./app/routes/boardRoutes');
const taskRoutes = require('./app/routes/taskRoutes');

dotenv.config();
const config = process.env;
app.use(bodyParser.json());
app.use(morgan('combined'))
app.use(cors());

// db options
const db_options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(config.DB_HOST,db_options)
const db = mongoose.connection;
db.on("connected", function () {
  console.log("mongodb connected");
});
db.on("error", console.error.bind(console, "mongodb connection error:"));
mongoose.set("debug", false);

app.use(cors());
app.use(bodyParser.urlencoded({ limit: "12mb", extended: true }));
app.use(bodyParser.text());
app.use(
  bodyParser.json({
    type: "application/json",
    limit: "12mb"
  })
);

app.use('/users',userRoutes);
app.use('/boards',boardRoutes);
app.use('/tasks',taskRoutes);

app.listen(port,() => {
    console.log(`Server Up and Running on ${port}`)
})

