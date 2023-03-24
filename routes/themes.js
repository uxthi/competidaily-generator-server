const mongoose = require("mongoose");
const Competidaily = mongoose.model("competidaily");

module.exports = (app) => {
  // Get a random theme
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

  // Create a new theme
  app.post("/api/new-theme", async (req, res) => {
    const newTheme = req.body.theme;

    try {
      const existingTheme = await Competidaily.findOne({
        theme: req.body.theme,
      });

      if (existingTheme) {
        return res.status(500).json({
          status: "error",
          message: "Tema já cadastrado",
        });
      }

      const competidaily = await new Competidaily(req.body);
      competidaily.save();

      res.status(200).json({
        status: "success",
        message: "Tema cadastrado com sucesso!",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
};
