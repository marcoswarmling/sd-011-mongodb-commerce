db.produtos.updateMany(
  { $or: [
    { nome: { $ne: "McChicken" }, 
    ingredientes: { $ne: "ketchup" } },
  ] },
  { $push: { ingredientes: { $each: ["ketchup"] } } },
);

db.produtos.find(
  { },
  { _id: 0, nome: 1, ingredientes: 1 },
);
