db.produtos.count({ nome: { $regex: /mc/i } });
// regex testado em: https://regex101.com/