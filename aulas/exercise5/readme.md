# Atividade: Estruturas de Repetição em JavaScript

Este projeto tem como objetivo praticar os três principais tipos de loops em JavaScript: **FOR**, **WHILE** e **DO...WHILE**.

---

## 📂 Estrutura do Projeto
- `index.html` → Arquivo principal que carrega o script.
- `app.js` → Arquivo JavaScript contendo a lógica dos loops.

---

## 📝 Passos Realizados

### 1. Loop FOR
- Usado para mostrar os números de **1 a 10**.
- Ideal quando já sabemos o **início e o fim** da repetição.

```js
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

---

### 2. Loop WHILE
- Usado para mostrar os números **pares de 2 a 20**.
- Executa enquanto a condição for verdadeira.

```js
let j = 2;
while (j <= 20) {
    console.log(j);
    j += 2;
}
```

---

### 3. Loop DO...WHILE
- Usado para pedir uma senha (`"1234"`) até que o usuário acerte.
- Garante que o bloco seja executado **pelo menos uma vez**, mesmo que a condição seja falsa.

```js
let senha;
do {
    senha = prompt("Digite a senha:");
} while (senha !== "1234");

console.log("Senha correta! Acesso liberado.");
```

---

## 💡 Comparação dos Loops

| Estrutura   | Característica Principal | Exemplo de Uso |
|-------------|--------------------------|----------------|
| **FOR**     | Planejado, com início e fim definidos. | Contagem de 1 a 10. |
| **WHILE**   | Executa enquanto a condição for verdadeira. | Mostrar números pares até 20. |
| **DO...WHILE** | Executa pelo menos uma vez, mesmo que a condição seja falsa. | Solicitar senha até acertar. |

---

## ✅ Conclusão
Essa atividade mostrou:
- Como usar **FOR** para repetições com limites conhecidos.
- Como usar **WHILE** para repetições condicionais.
- Como usar **DO...WHILE** para garantir execução mínima.
- A diferença prática entre os três tipos de loops.
