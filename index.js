const express = require('express');

//Crear el servidor de express

const app = express()


//TODO: auth,comentaries,publications,cetegories
//TODO: CRUD

app.use('api/auth', require('./routes/auth'));
app.use('api/categories', require('./routes/categories'));
app.use('api/publications', require('./routes/publications'));
app.use('api/comentaries', require('./routes/comentaries'));

app.use(express.static('public'))

//escuchar peticiones
app.listen(process.env.PORT,()=>{
    console.log('Servidor en puerto 8080');
})