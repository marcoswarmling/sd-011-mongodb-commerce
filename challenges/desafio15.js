db.produtos.find({ nome: { $regex: /mc/i } }).count();

// Explicação do course https://app.betrybe.com/course/back-end/mongodb-updates-simples-e-complexos/updates-complexos-arrays-parte-2/4fd2d65a-b343-43a7-adb2-fc06227153f7/conteudos/180eb9df-26a4-4499-a60c-1f91d6e45f79/operador-regex/52a5d466-2934-478f-b4c8-eecf1ec13388?use_case=side_bar