const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/competidaily");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

require("./routes/user")(app);
require("./routes/themes")(app);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
