

# 📘 Atividade Prática – HTML e Node.js

## 🎯 Objetivo
Aprender a criar e executar dois arquivos simples:
- Um **HTML** para rodar no navegador.
- Um **JavaScript (Node.js)** para rodar no terminal.

Em ambos, exibir:
- Seu nome.
- Sua idade.
- O resultado da soma entre `7 + 3`.

---

## 📂 Estrutura de Arquivos
```
projeto/
│── one.html
│── one.js
```

---

## 🖥️ index.html (Navegador)
No arquivo `one.html`:
- Foi usado **JavaScript dentro da tag `<script>`**.
- O navegador pede ao usuário:
  - Nome (via `prompt`).
  - Idade (via `prompt`).
- Calcula a soma `7 + 3`.
- Exibe tudo no **console do navegador**.

### Código principal:
```html
<script>
    let name = prompt('insira seu nome: ')
    let age = prompt('insira sua idade: ')
    let soma = 7 + 3
    console.log(`Seja bem vindo ${name}, sua idade é ${age}`);
    console.log(`A soma da conta 7 + 3 = ${soma}`);        
</script>
```

### Como rodar:
1. Abra o arquivo `one.html` no navegador.
2. Insira os dados quando solicitado.
3. Abra o **console (F12 → aba Console)** para ver o resultado.

---

## ⚙️ app.js (Node.js)
No arquivo `one.js`:
- Os valores foram definidos diretamente no código:
  - Nome: `"Ryan"`.
  - Idade: `19`.
- Soma calculada com `7 + 3`.
- Exibição feita com `console.log`.

### Código principal:
```js
let name = 'Ryan'
let age = 19
let sum = 7 + 3

console.log(`Seja bem vindo ${name}, sua idade é ${age}`)
console.log(`A soma da conta 7 + 3 = ${sum}`);
```

### Como rodar:
1. Abra o terminal na pasta do projeto.
2. Execute:
   ```
   node one.js
   ```
3. Veja a saída diretamente no terminal.

---

## 🚀 O que foi aprendido
- Diferença entre rodar **JavaScript no navegador** e **JavaScript no Node.js**.
- Uso de `prompt` para entrada de dados no navegador.
- Uso de `console.log` para saída de informações.
- Estrutura básica de um projeto com arquivos separados.

