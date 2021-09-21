db.produtos.updateMany(
    { $or: [{ nome: { $ne: "McChicken" }, ingredientes: { $ne: "ketchup" } }] }, 
    { $push: { ingredientes: { $each: ["ketchup"] } } },
);

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
