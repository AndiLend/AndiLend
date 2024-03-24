
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/:rut', (req, res) => {
  const { rut } = req.params;
  const score = Math.floor(Math.random() * 1001);
  res.json({ rut, score });
});

app.listen(PORT, () => {
  console.log(`Server is listening in the port: ${PORT}`);
});