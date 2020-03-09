const express = require("express");
const app = express();
const routes = require("./src/api/routes");
const { port } = require("./src/utils/constants");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);
app.listen(port, () => console.log(`listening on port${port}`));
