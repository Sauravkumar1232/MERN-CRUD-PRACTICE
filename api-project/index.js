// const express = require("express");
// const app = express();
// // const { connect } = require("mongoose");
// const connect = require("./connection");
// const userRouter = require("./routes/UserRoute");
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// const cors = require("cors");
// app.use(cors);
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// app.use(userRouter);
// app.listen(3000, () => {
//   console.log("Server Started");
// });
// connect();

const express = require("express");
const app = express();
const connect = require("./connection");
const userRouter = require("./routes/UserRoute");
// const bookRouter = require("./router/bookRouter");

const cors = require("cors");
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// app.use(express.json());
app.use(cors());
app.use(userRouter);
// app.use(bookRouter);

app.listen(3000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server is running at 3000");
  }
});

connect();
