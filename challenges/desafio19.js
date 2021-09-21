db.produtos.updateMany(
  {},
  {$rename:{descricao:"descricaoSite"}},
); 
db.produtos.find({}, {_id: 0, nome:1, valorUnitario: 1});
