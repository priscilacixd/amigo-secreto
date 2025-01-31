let amigos = [];

function getListaAmigos() {
    return document.getElementById("listaAmigos");
}

function adicionarAmigo() {
    let amigoInserido = document.getElementById("amigo").value; 
    console.log(amigoInserido);

    if (amigoInserido == "") {
        alert("Por favor insira um nome");
    } else {
        amigos.push(amigoInserido);
        console.log(amigos);
        exibirAmigos();
    }
    limparCampoInputAmigo(); 
}

function exibirAmigos() {
    listaAmigos = getListaAmigos();
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`; 
    }
}

function limparCampoInputAmigo() {
    let inputAmigo = document.getElementById("amigo"); 
    inputAmigo.value = "";
}

function gerarIndiceAleatorio() {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    return indiceAleatorio;
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Lista de amigos vazia, adicione amigos.");
    }
    else {
        listaAmigos = getListaAmigos();
        listaAmigos.innerHTML = "";
        let resultadoAmigo = document.getElementById("resultado");
        resultadoAmigo.innerHTML = `<li>${amigos[gerarIndiceAleatorio()]}</li>`;
    }
}

//limpar lista ul que exibe nome dos amigos assim que sortear
//limpar resultadoAmigo após sortear e for adicionar outro nome - mudar o botao para novo amigo secreto ou criar um novo botao que ativa quando sortear pela primeira vez.


