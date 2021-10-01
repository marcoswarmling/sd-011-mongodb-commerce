db.produtos.createIndex({ descricao: "text" },
{ default_language: "portuguese" });
// explicação tirada da pagina https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/