const mongoose = require("mongoose");
const Competidaily = mongoose.model("competidaily");

module.exports = (app) => {
  app.get("/api/random-theme", async (req, res) => {
    try {
      const competidailies = await Competidaily.aggregate([
        { $sample: { size: 1 } },
      ]);
      const randomCompetidaily = competidailies[0];

      res.status(200).json(randomCompetidaily);
    } catch (err) {
      res
        .status(500)
        .json("Ops, ocorreu um erro ao buscar o tema. Tente novamente!");
    }
  });
};
