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

const allowlist = ["http://example1.com", "http://example2.com"];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
// app.use(cors(corsOptionsDelegate));

app.use(express.static(path.join(__dirname, "frontend")));
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.listen(PORT, function () {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
  exec(`open http://127.0.0.1:${PORT}/`);
});
