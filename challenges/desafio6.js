db.produtos.updateMany(
  { $and: [{ nome: "Big Mac", nome: "Quarteirão com Queijo" }] },
  { $push: { ingredientes: "bacon", $position: -1 } },
);

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
