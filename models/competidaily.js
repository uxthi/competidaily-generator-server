const mongoose = require("mongoose");
const { Schema } = mongoose;

const competidailySchema = new Schema({
  theme: String,
});

mongoose.model("competidaily", competidailySchema);
