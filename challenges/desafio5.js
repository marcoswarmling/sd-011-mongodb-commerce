db.produtos.updateMany(
  { nome: { $not: "McChicken" }, ingredientes: { $not: { $elemMatch: "ketchup" } } },
  { $push: { ingredientes: "ketchup" } },
);

db.produtos.find(
  { },
  { nome: 1, ingredientes: 1, _id: 0 },
);
