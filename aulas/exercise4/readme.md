
# Atividade: Condições, Switch e Classificação em JavaScript

Este projeto tem como objetivo praticar **estruturas condicionais** (`if/else`), o uso de `switch` e a criação de programas que classificam valores de entrada.

---

## 📂 Estrutura do Projeto
- `four.html` → Arquivo principal que carrega o script para rodar no navegador.
- `four.js` → Arquivo JavaScript contendo a lógica da atividade.

---

## 📝 Passos Realizados

### 1. Verificador de Idade (Navegador)
- Foi utilizado `prompt()` para pedir a idade ao usuário.
- A idade foi convertida para número com `Number()`.
- Usamos **condições (`if/else`)** para classificar:
  - `< 12` → Criança  
  - `12 - 17` → Adolescente  
  - `18 - 59` → Adulto  
  - `>= 60` → Idoso  

Exemplo:
```js
let age = prompt("Digite sua idade:");
age = Number(age);

if (age < 12) {
    classification = "Criança";
} else if (age >= 12 && age <= 17) {
    classification = "Adolescente";
} else if (age >= 18 && age <= 59) {
    classification = "Adulto";
} else if (age >= 60) {
    classification = "Idoso";
}
document.body.innerHTML += `<p>Você é: <strong>${classification}</strong></p>`;
```

---

### 2. Nome do Mês (Node.js / Terminal)
- Criamos uma variável `mes` com valores de 1 a 12.
- Usamos `switch` para mostrar o nome correspondente.

Exemplo:
```js
let mes = 3;
let mesNome;

switch (mes) {
    case 1: mesNome = "Janeiro"; break;
    case 2: mesNome = "Fevereiro"; break;
    case 3: mesNome = "Março"; break;
    // ...
    case 12: mesNome = "Dezembro"; break;
    default: mesNome = "Mês inválido";
}
console.log("O mês é:", mesNome);
```

---

### 3. Extra: Classificação de Nota
- Criamos um programa que recebe uma nota e classifica:
  - `>= 9` → Excelente  
  - `>= 7` → Bom  
  - `>= 5` → Regular  
  - `< 5` → Reprovado  

Exemplo:
```js
let nota = 8;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Bom");
} else if (nota >= 5) {
    console.log("Regular");
} else {
    console.log("Reprovado");
}
```

---

## 💡 Conceitos Importantes
- **prompt()** → usado no navegador para entrada de dados.
- **if/else** → estrutura condicional para verificar faixas de valores.
- **switch** → ideal para múltiplos casos fixos (como meses).
- **console.log()** → saída no terminal.
- **document.body.innerHTML** → saída no navegador.

---

## ✅ Conclusão
Essa atividade mostrou:
- Como coletar dados do usuário no navegador.
- Como classificar valores usando condições.
- Como usar `switch` para mapear números em nomes.
- Como criar um sistema simples de avaliação de notas.
