db.produtos.find(
    { $expr: { $gt: ["$curtidas", "$vendidos"] } }, { nome: 1, _id: 0 },
 );

// https://docs.mongodb.com/manual/reference/operator/update/rename/
