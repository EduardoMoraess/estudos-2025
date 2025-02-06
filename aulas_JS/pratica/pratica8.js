/*
Exercício: Contagem Regressiva
Crie um programa que:
1-Peça para o usuário digitar um número inteiro positivo.
2-Faça uma contagem regressiva desse número até 0.
3-Exiba a contagem no console usando console.log().
*/

let numero = Number(prompt('Digite um numero inteiro'));

if(numero > 0 && Number.isInteger(numero)){
    console.log('Iniciando contagem...');

    for (let i=numero; i>=0; i--){
        console.log(i);
    }
    console.log('FIM');
}
else{
    alert('Digite um numero inteiro positivo');
}
