db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
  );

db.produtos.count({ $text: { $search: "feito com" } });

// db.produtos.find(
//   { },
//   { 
//     nome: 1,
//     tags: 1,
//     _id: 0
//   }
// );
