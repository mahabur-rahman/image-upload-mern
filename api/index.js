const express = require("express");
const app = express();
const colors = require("colors");
const cors = require("cors");

// routes
const imageRoute = require("./routes/post.router");
// dotenv config
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 4000;

// connected to mongodb
const connectedDB = require("./db/connect");
connectedDB();

// middleware

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors());
app.use("/api", imageRoute);

// listen app
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
