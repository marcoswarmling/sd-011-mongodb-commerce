db.produtos.find(
  { nome: {
    $regex: /mc/i, 
  }, 
  },
).count();

/* 
Regex expressions based on the topics found on:
<https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285>
*/
