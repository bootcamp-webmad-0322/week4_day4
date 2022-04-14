require("dotenv/config");
require("./db");

const express = require("express");
const app = express();

require("./config")(app);

const capitalized = require("./utils/capitalized");
const projectName = "bookaria_";
app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

const index = require("./routes/index.routes");
app.use("/", index);

require("./error-handling")(app);

module.exports = app