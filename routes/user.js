module.exports = (app) => {
  // teste de rota
  app.get(["/"], (req, res) => {
    const response = "Teste da rota / com sucesso!";

    console.log("response da / ->", response);

    res.send(response);
  });
};
