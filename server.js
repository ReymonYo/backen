const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
console.log(`servidor listo y escuchando en el puerto: ${port}`)

});
app.get("/", function(request, response){
response.send("backend funcionando")
})