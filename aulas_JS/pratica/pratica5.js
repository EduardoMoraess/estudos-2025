/*
Exercício: Jogo de Adivinhação 🎯
Crie um programa que:
1-Escolha um número aleatório entre 1 e 10.
2-Peça para o usuário adivinhar o número.
3-Informe se o usuário acertou ou errou.
*/

let numeroSecreto = Math.floor(Math.random()*10) +1;

let tentativa = Number(prompt('Digite um numero entre 1 e 10:'));

if(tentativa === numeroSecreto){
    alert('Voce acertou o numero!')
}
else{
    alert(`ERROU! o numero secreto era ${numeroSecreto}`)
}