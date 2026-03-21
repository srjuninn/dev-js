
# Atividade: Objetos em JavaScript

Este projeto tem como objetivo praticar a criação e manipulação de **objetos** em JavaScript, incluindo propriedades, métodos e iteração sobre arrays dentro de objetos.

---

## 📂 Estrutura do Projeto
- `index.html` → Arquivo principal que carrega o script.
- `app.js` → Arquivo JavaScript contendo os objetos e suas operações.

---

## 📝 Passos Realizados

### 1. Objeto Pessoa
- Criado um objeto `pessoa` com as propriedades:
  - `nome`
  - `idade`
  - `profissao`
- Adicionado o método `apresentar()` que retorna uma frase personalizada usando `this`.

```js
const pessoa = {
  nome: "Ryan",
  idade: 19,
  profissao: "Dev",
  apresentar: function() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
  }
};
console.log(pessoa.apresentar());
```

---

### 2. Objeto Carro
- Criado um objeto `carro` com as propriedades:
  - `marca`
  - `modelo`
  - `ano`
- Adicionado o método `ligar()` que imprime e retorna `"Carro ligado"`.

```js
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  ligar: function() {
    console.log("Carro ligando");
    return "Carro ligado";
  }
};
carro.ligar();
```

---

### 3. Objeto Loja
- Criado um objeto `loja` com:
  - `nome`
  - `produtos` (array de frutas).
- Usado `Object.entries` para listar todos os produtos com índice.

```js
const loja = {
  nome: "Loja de Frutas",
  produtos: ["maçã", "banana", "laranja", "uva", "manga"]
};

for (const [index, produto] of Object.entries(loja.produtos)) {
  console.log(`${parseInt(index) + 1} - ${produto}`);
}
```

---

### 4. Exibição no Navegador
- Todos os resultados foram exibidos também no navegador usando `document.getElementById("output").textContent`.

---

## 💡 Conceitos Importantes
- **Objetos** → agrupam dados e comportamentos relacionados.
- **Métodos** → funções dentro de objetos que podem acessar propriedades com `this`.
- **Object.entries** → retorna pares `[chave, valor]` de um objeto ou array, útil para iteração.
- **console.log()** → saída no terminal.
- **document.getElementById().textContent** → saída no navegador.

---

## ✅ Conclusão
Essa atividade mostrou:
- Como criar objetos com propriedades e métodos.
- Como acessar dados usando `this`.
- Como iterar sobre arrays dentro de objetos.
- Como exibir resultados tanto no **console** quanto no **navegador**.
