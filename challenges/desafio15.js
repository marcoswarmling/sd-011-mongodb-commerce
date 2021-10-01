db.produtos.updateMany({}, { $text: { $seach: "Mc" } });
db.produtos.count({ nome: { $regex: /"Mc"/ } });