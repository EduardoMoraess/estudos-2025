/*
Exercício: Calculadora de Tabuada
Crie um programa que:
1-Peça para o usuário inserir um número.
2-Exiba a tabuada desse número (de 1 a 10) no console.
*/

let numero = 2

if(!isNaN(numero)){
    console.log(`Tabuada do numero ${numero}`)

    for (let i =1; i <=10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}else{
    console.log('ERRO! numero não encontrado')
}