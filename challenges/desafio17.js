db.produtos.createIndex({ subject: "text" }, { default_language: "portuguese" });

db.produtos.find({ $text: { $search: "frango hamburguer" } }).count();