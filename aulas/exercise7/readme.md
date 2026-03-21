
# Atividade: Arrays em JavaScript

Este projeto tem como objetivo praticar operações com **arrays** em JavaScript, utilizando métodos como `push`, `pop`, `unshift`, `shift`, `filter`, `map`, `reduce`, `sort` e `reverse`.

---

## 📂 Estrutura do Projeto
- `index.html` → Arquivo principal que carrega o script.
- `app.js` → Arquivo JavaScript contendo as operações com arrays.

---

## 📝 Passos Realizados

### 1. Array de Frutas
- Criado um array com **5 frutas**.
- Utilizados métodos para manipulação:
  - `push` → adiciona no final.
  - `pop` → remove do final.
  - `unshift` → adiciona no início.
  - `shift` → remove do início.

```js
let frutas = ["maçã", "banana", "laranja", "uva", "manga"];
frutas.push("abacaxi");
frutas.pop();
frutas.unshift("morango");
frutas.shift();
console.log("Frutas:", frutas);
```

---

### 2. Array de Números
- Criado um array com **10 números**.
- Usado `filter` para mostrar apenas os pares.

```js
let numeros = [1,2,3,4,5,6,7,8,9,10];
let pares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", pares);
```

---

### 3. Map: Quadrados
- Usado `map` para criar um novo array com os números ao quadrado.

```js
let quadrados = numeros.map(num => num * num);
console.log("Quadrados:", quadrados);
```

---

### 4. Reduce: Soma
- Usado `reduce` para somar todos os números do array.

```js
let soma = numeros.reduce((acc, num) => acc + num, 0);
console.log("Soma:", soma);
```

---

### 5. Sort e Reverse
- Usado `sort` para ordenar os números.
- Usado `reverse` para inverter a ordem.

```js
let ordenados = [...numeros].sort((a,b) => a - b);
let invertidos = [...ordenados].reverse();
console.log("Ordenados:", ordenados);
console.log("Invertidos:", invertidos);
```

---

### 6. Exibição no Navegador
- Todos os resultados foram exibidos também no navegador usando `document.getElementById("output").textContent`.

---

## 💡 Conceitos Importantes
- **push/pop** → manipulam o final do array.
- **unshift/shift** → manipulam o início do array.
- **filter** → retorna elementos que satisfazem uma condição.
- **map** → cria um novo array transformando cada elemento.
- **reduce** → reduz o array a um único valor (ex.: soma).
- **sort/reverse** → ordenam e invertem arrays.

---

## ✅ Conclusão
Essa atividade mostrou:
- Como manipular arrays com métodos básicos.
- Como aplicar funções de **ordenação, filtragem e transformação**.
- Como exibir resultados tanto no **console** quanto no **navegador**.
