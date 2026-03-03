let age = prompt("Digite sua idade: ");

// Converte para número
age = Number(age);

let classification;

if (age < 12) {
    classification = "Criança";
} else if (age >= 12 && age <= 17) {
    classification = "Adolescente";
} else if (age >= 18 && age <= 59) {
    classification = "Adulto";
} else if (age >= 60) {
    classification = "Idoso";
} else {
    classification = "age inválida";
}

// Mostra no navegador
document.body.innerHTML += `<p>Você é: <strong>${classification}</strong></p>`;

// botei tudo num arquivo só, apenas abra o console do navegador

let month = 3;

let monthName;

switch (month) {
    case 1: monthName = "Janeiro"; break;
    case 2: monthName = "Fevereiro"; break;
    case 3: monthName = "Março"; break;
    case 4: monthName = "Abril"; break;
    case 5: monthName = "Maio"; break;
    case 6: monthName = "Junho"; break;
    case 7: monthName = "Julho"; break;
    case 8: monthName = "Agosto"; break;
    case 9: monthName = "Setembro"; break;
    case 10: monthName = "Outubro"; break;
    case 11: monthName = "Novembro"; break;
    case 12: monthName = "Dezembro"; break;
    default: monthName = "Mês inválido";
}

console.log("O mês é: ", monthName);
