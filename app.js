/****************************************************************************************
 * Objetivo: API referente ao projeto de controle de jogos
 * Data: 13/02/2025
 * Autor: Gustavo Rocha Gomes Souto
 * Versão: 1.0
 * Observação:
 *********Para configurar e insatalar a API, precisamos das seguintes bibliotecas
 *              express         npm install express --save
 *              cors            npm install cors --save
 *              body-parser     npm install body-parser --save
 * ******** Para configurar e instalar o acesso ao Banco de Dados precisamos:
 *              prisma          npm install prisma --save (conexão com BD)
 *              prisma/client   npm install @prisma/client --save (executa scripts no BD)
 *              
 *** Após a instalação do prisma e do prisma client, devemos:
        npx prisma init  (Inicializar o prisma no projeto)

*** Para realizar o sincronismo do prisma com o Bd, devemos executar o seguinte comando:
        npx prisma migrate dev
**************************************************************************************/

//Import das bibliotecas para criar a API
const express   = require('express')
const cors      = require('cors')
const bodyParser= require('body-parser')

//Import das controllers para realizar o CRUD de dados
const controllerJogo = require('./controller/jogo/controllerJogo.js')

//Estabelecendo o formato de dados que devera chegar no body da requisição (POST ou PUT
const bodyParserJSON = bodyParser.json()

//Cria o objeto app para criar a API
const app = express()

//Configurações do cors
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())
    next()
})

//Endpoint para inserir um jogo no BD
app.post('/v1/controle-jogos/jogo', cors(), bodyParserJSON, async function (request, response) {

    //Recebe o conteúdo do body da requisição
    let dadosBody = request.body

    //Encaminhando os dados do body da requisição para a controller inserir no BD
    let resultJogo = await controllerJogo.inserirJogo(dadosBody)

    response.status(resultJogo.status_code)
    response.json(resultJogo)

})

app.listen(8080, function(){
    console.log('API aguardado requisições . . .')
})

