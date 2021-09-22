db.produtos.updateMany({}, { $pull: { ingredientes: { $in: ["cebola"] } } });
db.produtos.find({}, { _id: 0, ingredientes: 1 });