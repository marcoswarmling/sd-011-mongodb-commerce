db.getSiblingDB("commerce").produtos.updateOne(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } },
);

db.getSiblingDB("commerce").produtos.find(
  {},
   { _id: 0, nome: 1, ingredientes: 1 },
);
