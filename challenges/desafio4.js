/*
Requisito 4 - Atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac.

Para isso, escreva no arquivo desafio4.js duas queries, nesta ordem:

1- Crie uma query que atribua a data corrente ao campo ultimaModificacao no sanduíche Big Mac. Para a data corrente faça uso do tipo Date.

2- Crie uma query que retorne o nome de todos os documentos em que o campo ultimaModificacao existe.

*/

// use("commerce");
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: { $type: "date" } } },
);

// use("commerce");
db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { _id: 0, nome: 1 },
);

//= ==========================================================================
