const express = require('express');
const router = require('../routes/routes');

// Configurar el servidor
const server = express();

// Le permite a express entender el json del body de las peticiones
server.use(express.json())

// Configuración de los routers -> delegado -> routers
server.get('/', (request, response) => {
    response.send("Bienvenidos a la API de productos del gimnasio")
})

// Ejecutar los routers
server.use('/', router)

module.exports = server;
