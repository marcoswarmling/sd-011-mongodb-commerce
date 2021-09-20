db.produtos.createIndex({ descricao: "text" }, { default_language: "pt" });
// Como definir idioma padrão: https://www.redspark.io/mongodb-entendendo-full-text-search/
db.produtos.find({ $text: { $search: "\"feito com\"" } }).count();
