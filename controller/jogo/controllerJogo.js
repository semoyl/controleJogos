/****************************************************************************************
 * Objetivo: Controller responsável pela regra de negócio do CRUD do jogo
 * Data: 13/02/2025
 * Autor: Gustavo Rocha Gomes Souto
 * Versão: 1.0
 * **************************************************************************************/

//Função para inserir um novo jogo
const inserirJogo = async function(jogo){ 

    if(
        jogo.nome               == undefined   ||   jogo.nome               == ''   || jogo.nome                == null     ||  jogo.nome.length                > 80 ||
        jogo.data_lancamento    == undefined   ||   jogo.data_lancamento    == ''   || jogo.data_lancamento     == null     ||  jogo.data_lancamento.length     > 10 ||
        jogo.versao             == undefined   ||   jogo.versao             == ''   || jogo.versao              == null     ||  jogo.versao.length              > 10 ||
        jogo.tamanho            == undefined   ||   jogo.tamanho.length     > 10    || 
        jogo.descricao          == undefined   ||
        jogo.foto_capa          == undefined   ||   jogo.foto_capa.length   > 200   ||
        jogo.link               == undefined   ||   jogo.link.length        > 200   ||

    )

}

//Função para atualizar um jogo
const atualizarJogo = async function(){ 


}

//Função para excluir um jogo
const deletarJogo = async function(){ 

}

//Função para retornar um jogo
const listarJogo = async function(){ 

}

//Função para buscar um jogo
const buscarJogo = async function(){

}