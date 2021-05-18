// 6 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

//Opção1

let diasDaSemana = 5

if (diasDaSemana === 1){
    console.log ('Domingo')
}
else if (diasDaSemana === 2){
    console.log ('Segunda')
}
else if (diasDaSemana === 3){
    console.log ('Terça')
}
else if (diasDaSemana === 4){
    console.log ('Quarta')
}
else if (diasDaSemana === 5){
    console.log ('Quinta')
}
else if (diasDaSemana === 6){
    console.log ('Sexta')
}
else {
    console.log ('Sábado')    
}
// Opção

let diaDaSemana = '6'

switch (diaDaSemana) {
    case '1':
        console.log ('Domingo')
        break
    case '2':
        console.log ('Segunda')
        break
    case '3':
        console.log ('Terça')
        break
    case '4':
        console.log ('Quarta')
        break
    case '5':
        console.log ('Quinta')
        break
    case '6':
        console.log ('Sexta')
        break
    case '7':
        console.log ('Sábado')
        break
    default:
}