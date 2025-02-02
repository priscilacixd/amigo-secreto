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
        alert("Todos foram sorteados!");
        document.getElementById("botao-sortear").style.visibility = "hidden";
        document.getElementById("botao-reset").style.visibility = "visible";
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
        span.textContent = "🔒 Nome escondido";
        span.classList.add("nome-secreto");

        span.onclick = function() {
            span.textContent = amigoSecreto;
            span.style.backgroundColor = "transparent";
        };

        li.appendChild(span); 
        listaSorteados.appendChild(li); 
    }
}





