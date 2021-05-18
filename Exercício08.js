// // 8 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

// - Se a media for igual ou maior que 7 - Aprovado
// - Se a media for maior e igual a cinco e menor que 7 - Recuperação
// - Se a media for menor que 5 - Reprovado


//Opção01

let nota01 = 7
let nota02 = 0
let nota03 = 7

if (((nota01 + nota02 + nota03) / 3) >= 7){
    console.log ('Aluno Aprovado')
}
else if (((((nota01 + nota02 + nota03) /3) >= 5) && ((nota01 + nota02 + nota03) /3) <7)){
    console.log ('Aluno em Recuperação')
}
else{
    console.log ('Aluno Reprovado')
}

// Opção02

let nota1 = 7
let nota2 = 2
let nota3 = 7

const media = (nota1 + nota2 + nota3) /3
    console.log (`Sua média foi ${media}`)

if (media >= 7){
    console.log ('Aprovado')
}
else if ((media >= 5) && (media <7)){
    console.log ('Recuperação')
}
else{
    console.log ('Reprovado')
}

