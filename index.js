const express = require('express');
const app = express();
const port = 8080;
//===================================
const bodyParser = require('body-parser');
//===================================
const jwt = require('jsonwebtoken');
const SECRET = 'PrassTools';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const usuario = "1";
const senha = "1";

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/pages/index.html");
    //__dirname retorna o caminho completo onde estao localizado este arquivo .js
    //logo apos o mesmo é concatenado com o caminho desejado para renderizar html
});

app.post('/client/login', (req, res) => {
    if (req.body.login && req.body.password !== ""){  //verifica se os input são diferentes de vazios
        if (req.body.login === usuario && req.body.password === senha)  //verifica se o login e a senha 
                                                                        //são iguais aos valores da variavies
            res.sendFile(__dirname + "/views/pages/client.html");
            //__dirname retorna o caminho completo onde estao localizado este arquivo .js
            //logo apos o mesmo é concatenado com o caminho desejado para renderizar html
    } else{
        res.status(401).end(); //caso os input estão vazios envia status code 401 não autorizado e finaliza 
    }
});

app.post('/client/logout', (req, res) => {
    res.sendFile(__dirname + "/views/pages/index.html");
    //__dirname retorna o caminho completo onde estao localizado este arquivo .js
    //logo apos o mesmo é concatenado com o caminho desejado para renderizar html
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});