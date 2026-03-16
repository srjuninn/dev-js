const scannerDoHTML = document.getElementById("scannerDoHTML");

// Função tradicional: nome + idade
function apresentar(nome, idade) {
    return `Salve ${nome}, você tem ${idade} anos!`;
}
scannerDoHTML.innerHTML += apresentar("Ryan", 19) + "\n\n";

// Função anônima: dobro de um número
const dobro = function(num) {
    return num * 2;
};
scannerDoHTML.innerHTML += "Dobro de 7 é " + dobro(7) + "\n\n";

// Arrow function: soma de dois números
const soma = (a, b) => a + b;
scannerDoHTML.innerHTML += "Soma de 5 + 3 = " + soma(5, 3) + "\n\n";

// Função par ou ímpar
function imparOuPar(num) {
    return num % 2 === 0 ? "Par" : "Ímpar";
}
scannerDoHTML.innerHTML += "Número 10 é " + imparOuPar(10) + "\n";
scannerDoHTML.innerHTML += "Número 7 é " + imparOuPar(7) + "\n";

// Função tradicional: é o jeitão clássico, bom pra quando você quer reaproveitar bastante.

// Função anônima: não tem nome, geralmente guardada numa variável.

// Arrow function: mais curtinha, estilo moderno, ótima pra funções simples.

