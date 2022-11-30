const express = require('express');
const app = express();
const port = 3000;
const mariadb = require('./app/BD/mariadb');
app.use(express.json());

app.listen(port, () => {
console.log(`servidor listo y escuchando en el puerto: ${port}`)
mariadb.init();
});
app.get("/", function(request, response){
response.send("backend funcionando")
})
require('./app/Rutas/registrosRouter')(app, mariadb);