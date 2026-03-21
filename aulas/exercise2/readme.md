
# Atividade: Tipos Primitivos em JavaScript

Este projeto tem como objetivo **explorar os tipos primitivos do JavaScript**, entender como o operador `typeof` funciona e realizar algumas conversões de tipo.

---

## 📂 Estrutura do Projeto
- `two.html` → Arquivo principal que carrega o script.
- `two.js` → Arquivo JavaScript contendo a lógica da atividade.

---

## 📝 Passos Realizados

### 1. Declaração de variáveis com tipos primitivos
Foram declaradas variáveis representando **todos os tipos primitivos** do JavaScript:

- `number` → números inteiros ou decimais.
- `string` → textos.
- `boolean` → valores lógicos (true/false).
- `undefined` → variável declarada mas não inicializada.
- `null` → valor nulo intencional.
- `symbol` → valores únicos e imutáveis.
- `bigint` → números inteiros muito grandes.

### 2. Uso do `typeof`
Cada variável foi exibida no console com `typeof`, mostrando seu tipo correspondente.  
Exemplo:
```js
console.log(typeof number); // number
console.log(typeof text);   // string
```

### 3. Conversões de tipo
Foram feitas três conversões para mostrar como o JavaScript lida com coerção de tipos:

1. **String → Number**
   ```js
   let stringToNumber = Number("19");
   console.log(stringToNumber, typeof stringToNumber); // 19 number
   ```

2. **Number → String**
   ```js
   let numToString = String(19);
   console.log(numToString, typeof numToString); // "19" string
   ```

3. **Number → Boolean**
   ```js
   let numToBoolean = Boolean(19);
   console.log(numToBoolean, typeof numToBoolean); // true boolean
   ```

---

## 💡 Observações Importantes
- O `typeof null` retorna `"object"`, o que é considerado uma **peculiaridade histórica do JavaScript**.
- Diferença entre `null` e `undefined`:
  - `null` → valor intencionalmente vazio.
  - `undefined` → variável declarada mas não inicializada.

---

## 📖 Conceito: Valor Primitivo vs Referência
- **Valor Primitivo**: armazenado diretamente na variável (ex.: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`).  
  Cada variável guarda o valor em si.
  
- **Valor de Referência**: usado em **objetos, arrays e funções**.  
  A variável não guarda o objeto em si, mas sim uma **referência** ao local da memória onde o objeto está armazenado.

Exemplo:
```js
let a = 10;       // primitivo
let b = a;        // copia o valor diretamente

let obj1 = {x: 1}; // referência
let obj2 = obj1;   // aponta para o mesmo objeto na memória
```

---

## ✅ Conclusão
Essa atividade mostrou:
- Como declarar e identificar tipos primitivos.
- Como usar `typeof`.
- Como realizar conversões de tipo.
- A diferença entre valores primitivos e valores por referência.
