db.produtos.updateMany({},
{ $set: { criadoPor: "Ronald McDonald" } });
db.produtos.finf({}, { nome: 1, criadoPor: 1, _id: 0 });
