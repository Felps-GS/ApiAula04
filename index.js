const express = require("express");
const app = express();

const dataAtual = new Date();


app.get("/idade/:nome/:idade", (req, res) => {
    const { nome, idade } = req.params;
    const idadeUsuario = dataAtual.getFullYear() - idade;
    res.status(200).json({
      mensagem: `Nome: ${nome}, Idade: ${idadeUsuario} `
    })
});


app.listen(3005, () => {
  console.log("Felipe, Servidor on");
});