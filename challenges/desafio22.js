db.produtos.find(
    { vendidos: { $mod: [5, 0] } }, { nome: 1, vendidos: 1, _id: 0 },
 );

// https://docs.mongodb.com/manual/reference/operator/update/rename/
