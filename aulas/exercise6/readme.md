# Atividade: Funções em JavaScript

Este projeto tem como objetivo praticar diferentes formas de declarar e utilizar funções em JavaScript: **tradicional**, **anônima** e **arrow function**, além de aplicar lógica simples para verificar se um número é par ou ímpar.

---

## 📂 Estrutura do Projeto
- `index.html` → Arquivo principal que carrega o script.
- `app.js` → Arquivo JavaScript contendo as funções e testes.

---

## 📝 Passos Realizados

### 1. Função Tradicional
- Criada para receber **nome** e **idade** e retornar uma frase personalizada.
```js
function apresentar(nome, idade) {
    return `Salve ${nome}, você tem ${idade} anos!`;
}
```

### 2. Função Anônima
- Criada para calcular o **dobro de um número**.
- Não possui nome, sendo atribuída a uma variável.
```js
const dobro = function(num) {
    return num * 2;
};
```

### 3. Arrow Function
- Criada para somar dois números.
- Sintaxe curta e moderna, ideal para funções simples.
```js
const soma = (a, b) => a + b;
```

### 4. Função Par ou Ímpar
- Recebe um número e retorna se ele é **par** ou **ímpar**.
```js
function imparOuPar(num) {
    return num % 2 === 0 ? "Par" : "Ímpar";
}
```

---

## 💡 Comparação das Funções

| Tipo de Função   | Características | Exemplo |
|------------------|-----------------|---------|
| **Tradicional**  | Sintaxe clássica, reutilizável, ideal para funções mais complexas. | `function apresentar(...) { ... }` |
| **Anônima**      | Não possui nome, geralmente atribuída a uma variável. | `const dobro = function(...) { ... }` |
| **Arrow Function** | Sintaxe curta e moderna, ótima para funções simples. | `const soma = (a, b) => a + b;` |

---

## ✅ Conclusão
Essa atividade mostrou:
- Como declarar funções de diferentes formas.
- Como aplicar lógica simples para cálculos e verificações.
- A diferença entre **funções tradicionais**, **anônimas** e **arrow functions**.
- Como testar todas elas no navegador e no terminal.
