const express = require('express');
const routes = require('./routes'); // Importar las rutas

const app = express();
const port = 3000;

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Servidor conectado a MongoDB');
}); 


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});