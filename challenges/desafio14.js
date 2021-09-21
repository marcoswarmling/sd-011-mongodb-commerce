db.produtos.updateMany(
  { $elemMatch: {
     tipo: "sódio",
     percentual: { $gte: 20, $lt: 40 },
    },
  },
  { $push: {
    tags: "contém sódio",
  } },
);

db.produtos.find({}, 
  { _id: 0, nome: 1, tags: 1 });
