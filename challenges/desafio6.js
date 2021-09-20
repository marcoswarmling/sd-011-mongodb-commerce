db.produtos.updateMany({ $and: [{ nome: "Quarteirao com Queijo" }, { nome: "Big Mac" }] },
  { $push: { ingredientes: "bacon" } });

db.produtos.find({}, 
{ _id: 0, nome: 1, ingredientes: 1 });
