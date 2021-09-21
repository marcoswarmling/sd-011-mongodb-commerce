db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });

db.produtos.count({ $text: { $search: "frango hamburguer" } });

// References: https://docs.mongodb.com/manual/text-search/