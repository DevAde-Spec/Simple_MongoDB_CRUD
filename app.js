const express = require("express");
const mongoose = require("mongoose");
const productRouter = require('./routers/product.route'); // Make sure this file exists

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/products', productRouter);

app.get("/", (req, res) => {
  res.send("Hello from Node Api");
});

app.get("/login", (req, res) => {
  res.send("<form method='POST' style='padding: 30px;'><input type='text' name='username' placeholder='please enter your Username'/><br><input type='password' name='password' placeholder='please enter your Password'/><br><button>Login</button></form>");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("<b>Submitted</b>");
});

// Database connection and server start
mongoose
  .connect(
    "mongodb+srv://enochades7_db_user:LPD7AhPCxzROu3zP@clusterx.mozokyf.mongodb.net/Mongodb-Tut?retryWrites=true&w=majority&appName=ClusterX"
  )
  .then(() => {
    console.log("Connected to database");
    // Only start the server after a successful database connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Connection to database failed:", error);
  });