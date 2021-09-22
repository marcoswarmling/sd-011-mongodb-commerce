db.produtos.updateMany(
  {},
  { $push: { tags: { $each: ["combo", "tasty"], $sort: { tags: 1 } } } },
);