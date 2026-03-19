// 1. Objeto pessoa
const pessoa = {
  nome: "Ryan",
  idade: 19,
  profissao: "Dev",
  apresentar: function() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
  }
};

console.log(pessoa.apresentar());

// 2. Objeto carro
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

// 3. Objeto loja
const loja = {
  nome: "Loja de Frutas",
  produtos: ["maçã", "banana", "laranja", "uva", "manga"]
};

// Usando Object.entries para listar produtos
console.log("Produtos da loja:");
for (const [index, produto] of Object.entries(loja.produtos)) {
  console.log(`${parseInt(index) + 1} - ${produto}`);
}

// Mostrar no navegador
let output = `
${pessoa.apresentar()}

${carro.ligar()}

Produtos da ${loja.nome}:
`;

for (const [index, produto] of Object.entries(loja.produtos)) {
  output += `${parseInt(index) + 1} - ${produto}\n`;
}

document.getElementById("output").textContent = output;
