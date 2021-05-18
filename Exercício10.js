//    10 - Crie uma variavel que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

let anoNascimento = 1989
let anoAtual = new Date().getFullYear() //busquei na internet como eu podia colocar o ano atual sem escrever o ano mesmo, já que se eu colocasse exatamente o ano toda vez que mudasse de ano teria que mudar o código.
    console.log (`Você tem ${anoAtual - anoNascimento} anos`)

if (anoAtual - anoNascimento >= 18) {
    console.log ('Já é maior de Idade')
}
else {
    console.log ('Não é maior de idade ainda')
}


