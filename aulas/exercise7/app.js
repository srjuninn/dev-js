// 1. Array de frutas
let frutas = ["maçã", "banana", "laranja", "uva", "manga"];

// Usando push (adiciona no final)
frutas.push("abacaxi");

// Usando pop (remove do final)
frutas.pop();

// Usando unshift (adiciona no início)
frutas.unshift("morango");

// Usando shift (remove do início)
frutas.shift();

console.log("Frutas:", frutas);
    
// 2. Array de números
let numeros = [1,2,3,4,5,6,7,8,9,10];

// Filtrar pares
let pares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", pares);

// 3. Map: quadrados
let quadrados = numeros.map(num => num * num);
console.log("Quadrados:", quadrados);

// 4. Reduce: soma
let soma = numeros.reduce((acc, num) => acc + num, 0);
console.log("Soma:", soma);

// 5. Sort e reverse
let ordenados = [...numeros].sort((a,b) => a - b);
let invertidos = [...ordenados].reverse();
console.log("Ordenados:", ordenados);
console.log("Invertidos:", invertidos);

// Mostrar no navegador
let output = `
Frutas: ${frutas}
Números pares: ${pares}
Quadrados: ${quadrados}
Soma: ${soma}
Ordenados: ${ordenados}
Invertidos: ${invertidos}
`;

document.getElementById("output").textContent = output;
