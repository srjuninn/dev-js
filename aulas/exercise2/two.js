let number = 19;
let text = "vai braazil";
let boolean = false;
let undefinedi;
let nullu = null;

console.log(typeof number); // number
console.log(typeof text);   // string
console.log(typeof boolean);    // boolean
console.log(typeof undefinedi); // undefined
/* interessante que o tipo de dado nulo retorna um objeto no JS porque no começo o null foi tratado
    como um erro e não como uma variável nula e o povo não quis corrijir, e ficou nessa retornando um objeto
*/
console.log(typeof nullu);  // object (peculiaridade do JS)

// Conversões

// 1. String to number
let stringToNumber = Number(number);
console.log(stringToNumber, typeof stringToNumber); // 19 number

// 2. Número para string
let numToString = String(number);
console.log(numToString, typeof numToString); // "19" string

// 3. Número para boolean
let numToBoolean = Boolean(number);
console.log(numToBoolean, typeof numToBoolean); // true boolean

/*
Diferença entre null e undefined:

- O null é um valor itencionalmente nulo pra demonstrar que a memória alocou um valor nulo 

- Já o undefined é um valor esquecido de ser alocado na memória, ele existe porem não foi inicializado

*/
