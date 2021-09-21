db.produtos.updateMany({}, { $set: { avaliacao: NumberInt(0) } });
db.produtos.updateMany({ tags: "bovino" }, { $inc: { avalicao: 5 } });
db.produtos.updateMany({ tags: "ave" }, { $inc: { avalicao: 5 } });
db.produtos.find({}, { _id: 0, nome: 1, avalicao: 1 });
