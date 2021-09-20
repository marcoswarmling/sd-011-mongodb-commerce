db.produtos.updateMany(
  {},
  {
    $pull: {
      ingredientes: { $eq: "cebola" },
    },
  },
);

db.produtos.find(
  { },
  { nome: 1, _id: 0, ingredientes: 1 },
);
