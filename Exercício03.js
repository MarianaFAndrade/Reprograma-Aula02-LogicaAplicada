// 3 - Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorJantar = 500

const taxaDoGarçom = valorJantar *(10/100)
const valorDaConta = valorJantar + taxaDoGarçom
    console.log (`A taxa do garçom é R$ ${taxaDoGarçom} | O valor total da conta é R$ ${valorDaConta}`)