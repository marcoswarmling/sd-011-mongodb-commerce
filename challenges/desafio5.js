db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $push: { $addToSet: { ingredientes: "bacon" } } }
);

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
