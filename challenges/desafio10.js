db.produtos.updateMany(
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
);

/* note to self: teste da query abaixo aceita tanto um comparação do tipo
"OR" quanto do tipo "AND", no entanto o exercício requer uma
comparação do tipo "AND" apenas */

db.produtos.updateMany(
  { $and: [{ tags: "bovino" }, { tags: "pão" }] },
  { $inc: { "vendasPorDia.6": 120 } },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, vendasPorDia: 1 },
);
