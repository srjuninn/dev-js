# Exercício de Interações com JavaScript

Este projeto foi desenvolvido como parte de uma atividade prática para treinar **HTML, CSS e JavaScript**.  
O objetivo foi implementar interações simples em uma página web.

---

## 📌 Objetivos da atividade

1. Criar um arquivo `index.html`.
2. Implementar:
   - Um botão que muda a cor de fundo da página.
   - Um campo de texto e um botão: ao clicar, adicionar o valor digitado em uma lista (`<ul>`).
   - Um botão que remove o último item da lista.
   - Um parágrafo que muda de conteúdo ao passar o mouse.
3. Testar cada interação no navegador.

---

## 📂 Estrutura do projeto

```
exercise9/
│── index.html   # Estrutura da página
│── style.css    # Estilos visuais
│── script.js    # Lógica em JavaScript
```

---

## 🖥️ Como funciona cada parte

### 1. `index.html`
- Define a estrutura da página.
- Contém os botões, campo de texto, lista (`<ul>`) e parágrafo interativo.
- Inclui os arquivos `style.css` e `script.js`.

### 2. `style.css`
- Aplica estilos modernos e agradáveis:
  - Fonte padrão (`Segoe UI`).
  - Botões com cor azul e efeito *hover*.
  - Lista com fundo cinza claro e bordas arredondadas.
  - Parágrafo que muda de cor ao passar o mouse.

### 3. `script.js`
- Contém as funções JavaScript que dão vida à página:
  - **`mudarCor()`** → escolhe uma cor aleatória e aplica no fundo da página.
  - **`adicionarItem()`** → pega o valor digitado no campo de texto e adiciona como `<li>` na lista.
  - **`removerItem()`** → remove o último item da lista, se existir.
  - **`mudarTexto()` / `restaurarTexto()`** → alteram o conteúdo do parágrafo quando o mouse passa por cima ou sai.

---

## 🚀 Como testar

1. Abra o arquivo `index.html` em qualquer navegador.
2. Clique nos botões e observe as interações:
   - O fundo muda de cor.
   - O texto digitado aparece na lista.
   - O último item pode ser removido.
   - O parágrafo muda de mensagem ao passar o mouse.
3. Experimente diferentes entradas e veja os resultados.

---

## 🎯 Aprendizados

- Uso de **eventos** em JavaScript (`onclick`, `onmouseover`, `onmouseout`).
- Manipulação do **DOM** (`document.getElementById`, `appendChild`, `removeChild`).
- Separação de responsabilidades entre **HTML (estrutura)**, **CSS (estilo)** e **JS (lógica)**.
- Teste e depuração diretamente no navegador.

---

## ✅ Resultado

Uma página interativa simples, mas que demonstra bem como HTML, CSS e JavaScript trabalham juntos para criar experiências dinâmicas na web.
