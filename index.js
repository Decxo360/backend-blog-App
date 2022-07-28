const express = require('express');

//Crear el servidor de express

const app = express()

app.use(express.static('public'))

//escuchar peticiones
app.listen(8080,()=>{
    console.log('Servidor en puerto 8080');
})