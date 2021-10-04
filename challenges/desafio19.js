db.produtos.updateMany({}, { $rename: { descricao: "descricaoSite" } });
db.produtos.find({}, { nome: 1, descricao: 1, descricaoSite: 1, _id: 0 });
// código do rename encontrado na documentação https://docs.mongodb.com/manual/reference/operator/update/rename/