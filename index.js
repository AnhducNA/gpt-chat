const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { exec } = require("child_process");
const cors = require("cors");

const routes = require("./src/routes/index");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(routes);

app.use(cors());

app.use(express.static(path.join(__dirname, "frontend")));
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.listen(PORT, function () {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
  exec(`open http://127.0.0.1:${PORT}/`);
});
