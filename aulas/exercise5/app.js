const answer = document.getElementById("answer");

// FOR: mostrar os números de 1 a 10
answer.innerHTML += "FOR (1 a 10):\n";
for (let i = 1; i <= 10; i++) {
    answer.innerHTML += i + " ";
}
answer.innerHTML += "\n\n";

// WHILE: mostrar os números pares de 2 a 20
answer.innerHTML += "WHILE (pares de 2 a 20):\n";
let j = 2;
while (j <= 20) {
    answer.innerHTML += j + " ";
    j += 2;
}
answer.innerHTML += "\n\n";

// DO...WHILE: pedir senha até acertar
answer.innerHTML += "DO...WHILE (senha = 1234):\n";
let senha;
do {
    senha = prompt("Digite a senha:");
} while (senha !== "1234");

answer.innerHTML += "Senha correta! Acesso liberado.\n";

// FOR é o planejado, você já sabe o começo e o fim.

// WHILE é o “vai rodando até não dar mais”.

// DO...WHILE é o insistente, não aceita sair sem rodar pelo menos uma vez.