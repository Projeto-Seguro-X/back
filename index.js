const express = require ('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get ('/', (res,req) =>{
    res.send('Projeto Seguro X')
});

app.listen(PORT, HOST);