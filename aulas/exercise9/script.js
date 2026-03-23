// Função para mudar cor de fundo
function mudarCor() {
    const cores = ["lightblue", "lightgreen", "lightyellow", "lightpink", "lavender"];
    const corAtual = document.body.style.backgroundColor;
    let novaCor = cores[Math.floor(Math.random() * cores.length)];
    while (novaCor === corAtual) {
        novaCor = cores[Math.floor(Math.random() * cores.length)];
    }
    document.body.style.backgroundColor = novaCor;
}

// Função para adicionar item à lista
function adicionarItem() {
    const input = document.getElementById("novoItem");
    const valor = input.value.trim();
    if (valor !== "") {
        const li = document.createElement("li");
        li.textContent = valor;
        document.getElementById("lista").appendChild(li);
        input.value = "";
    } else {
        alert("Digite algo antes de adicionar!");
    }
}

// Função para remover último item da lista
function removerItem() {
    const lista = document.getElementById("lista");
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
    } else {
        alert("A lista já está vazia!");
    }
}

// Funções para mudar texto ao passar o mouse
function mudarTexto() {
    document.getElementById("hoverText").textContent = "Você passou o mouse!";
}

function restaurarTexto() {
    document.getElementById("hoverText").textContent = "Passe o mouse aqui!";
}