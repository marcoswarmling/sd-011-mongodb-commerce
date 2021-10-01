db.produtos.createIndex({ descricao: "text" },
{ default_language: "portuguese" });
db.produtos.find({ $text: { $search: "frango hamburguer" } }).count();
// explicação tirada da pagina https://docs.mongodb.com/manual/tutorial/specify-language-for-text-index/
// https://app.betrybe.com/course/back-end/mongodb-updates-simples-e-complexos/updates-complexos-arrays-parte-2/4fd2d65a-b343-43a7-adb2-fc06227153f7/conteudos/180eb9df-26a4-4499-a60c-1f91d6e45f79/operador-text/eb96d105-ba91-473b-aec9-d5af0110f259?use_case=side_bar