db.produtos.updateMany(
  { valoresNutricionais: { tipo: { $eq: "sódio" } } },
  {
    $push: {
      tags: {
        $each: ["muito sódio"],
      },
    },
  },
);

db.produtos.find(
  { $and: [{ "valoresNutricionais.tipo": { $eq: "sódio" } }, { "valoresNutricionais.percentual": { $gte: 40 } }] },
);
