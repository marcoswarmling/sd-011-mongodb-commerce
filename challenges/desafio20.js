db.produtos.updateOne({ nome: "Big Mac" },
{ $unset: { curtidas: "" } });
db.produtos.find({}, { nome: 1, curtidas: 1, _id: 0 });
// R
// explicação do course https://app.betrybe.com/course/back-end/mongodb-updates-simples-e-complexos/updates-simples/5b7a5a21-706a-4f75-9354-cbd569ad7de3/conteudos/5ea3f9d5-95c4-498d-9f33-50e0e13739d1/removendo-campos-com-o-operador-unset/0bde39a3-2dbe-4789-acab-45da00ca752c?use_case=side_bar