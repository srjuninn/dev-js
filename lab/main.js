// Função pra poder pra pegar o nome completo da pessoa e mostrar apenas o primeiro e ultimo nome
function  welcome(fullName){
    let arrayString = fullName.split(" ")
    console.table(arrayString)
    let firstName = arrayString[0]
    let lastName = arrayString[arrayString.length - 1]
    console.log(`Seja bem vindo ${firstName} ${lastName}`);
    
}
welcome("Ryan Ferreira da Silva")
welcome("Gustavo Paulo Manoel de Andrade Marques")
welcome("Rodrigo de Paula Silva Junior")