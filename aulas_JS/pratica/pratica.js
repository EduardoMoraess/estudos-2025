/*
Crie um script em JS que: 
1-peça ao usuario dois numeros usando prompt()
2-Converta para numero
3-Some os dois numeros
4-Exiba o resultado no console(console.log()) ou em um alert(alert())
*/

let numero1 = Number(prompt('Digite um numero:'))
let numero2 = Number(prompt('Digite outro numero:'))

let soma = numero1 + numero2

alert(`A soma entre ${numero1} e ${numero2} vale a ${soma}`)