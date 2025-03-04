let amigos = []; 

function adicionarAmigo() {
    let nome_amigo = document.getElementById("amigo").value.trim();
    if (nome_amigo === "") {
        alert("Por favor, insira um nome.");
        return; 
    }

    amigos.push(nome_amigo);
    let list = document.createElement("li");
    list.textContent = `${nome_amigo} Adicionado a lista`;
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.appendChild(list);
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Não há amigos na lista para sortear.");
        return; 
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
