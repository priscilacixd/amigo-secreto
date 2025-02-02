let amigos = [];
let corAtualResultado = false;

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
        alert("Todos foram sorteados! Lista de amigos vazia");
        listaSorteados = document.getElementById("resultado");
        listaSorteados.innerHTML = "";
        document.getElementById("botao-sortear").style.visibility = "hidden";
        document.getElementById("botao-reset").style.visibility = "visible";
        document.getElementById("botao-adicionar").setAttribute("disabled", true);
    }
    else {
        listaAmigos = getListaAmigos();
        listaAmigos.innerHTML = "";
        listaSorteados = document.getElementById("resultado");
        listaSorteados.innerHTML = "";

        let indiceSorteado = gerarIndiceAleatorio();
        let amigoSecreto = amigos.splice(indiceSorteado, 1)[0];

        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = "🔒 Clique para ver, e novamente para esconder";
        span.classList.add("nome-secreto");

        span.onclick = function() {
            if (span.textContent === "🔒 Clique para ver, e novamente para esconder") {
                span.textContent = amigoSecreto;
                span.style.backgroundColor = "transparent";
            } else {
                span.textContent = "🔒 Clique para ver, e novamente para esconder";
                span.style.backgroundColor = ""; 
            }
        };

        corAtualResultado = !corAtualResultado;
        span.style.color = corAtualResultado ? "#01bc01" : "#933e95";

        li.appendChild(span); 
        listaSorteados.appendChild(li); 
    }
}





