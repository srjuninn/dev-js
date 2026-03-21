
# Atividade: Variáveis, Operações e Template Strings em JavaScript

Este projeto tem como objetivo praticar a declaração de variáveis, operações matemáticas e o uso de **concatenação** e **Template Strings** em JavaScript.

---

## 📂 Estrutura do Projeto
- `three.html` → Arquivo principal que carrega o script.
- `three.js` → Arquivo JavaScript contendo a lógica da atividade.

---

## 📝 Passos Realizados

### 1. Criação dos arquivos
- Foi criado um `three.html` simples que importa o arquivo `three.js` com `defer`.

### 2. Declaração de variáveis
No `three.js`, foram declaradas variáveis para:
- **Nome**, **idade** e **cidade**.
- Dois **números inteiros** para realizar operações matemáticas.

### 3. Exibição no navegador e no terminal
Foram utilizados `alert()` e `console.log()` para mostrar os resultados:

- **Frase com concatenação**
  ```js
  console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");
  alert("Meu nome é " + nome + " e tenho " + idade + " anos.");
  ```

- **Operações matemáticas**
  ```js
  console.log("Soma: " + (numero1 + numero2));
  console.log("Subtração: " + (numero1 - numero2));
  console.log("Multiplicação: " + (numero1 * numero2));
  console.log("Divisão: " + (numero1 / numero2));
  ```

- **Frase com Template String**
  ```js
  console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
  alert(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);
  ```

---

## 💡 Conceitos Importantes

- **Concatenação**: juntar valores com o operador `+`.
- **Template String**: usar crases `` ` `` e `${}` para interpolar variáveis de forma mais legível.
- **alert()**: exibe mensagens no navegador.
- **console.log()**: exibe mensagens no terminal (console do navegador).

---

## ✅ Conclusão
Essa atividade mostrou:
- Como declarar variáveis em JavaScript.
- Como exibir informações no navegador e no console.
- Como realizar operações matemáticas básicas.
- A diferença entre usar concatenação e Template Strings para construir frases.
