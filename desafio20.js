db.fruits.updateMany(
    { nome: "Big Mac" },
{ $unset: { curtidas: "" } },
);