/*
Exercício: Calculadora Simples
Crie um programa que:
1-Peça para o usuário digitar dois números.
2-Peça para o usuário escolher uma operação matemática (+, -, *, /).
3-Realize a operação escolhida e exiba o resultado com alert().
*/
let numero1 = Number(prompt('Digite o primeiro numero:'));
let numero2 = Number(prompt('Digite o segundo numero:'));

let operacao = prompt("Escolha uma operação (+, -, *, /):");
let resultado;

switch(operacao){
    case '+':
        resultado = numero1 + numero2
        break;
    case '-':
        resultado = numero1 - numero2
        break;
    case '*':
        resultado = numero1 * numero2
        break;
    case '/':
        if(numero2 !== 0){
            resultado = numero1 / numero2
        }
        else{
            alert('Erro! não é possivel dividir por zero');
            resultado = 'Invalido';
        }
        break;
    default:
        alert("Operação inválida! Use +, -, * ou /.");
        resultado = "Inválido";   
}
if(resultado !== 'Invalido'){
    alert(`Resultado: ${numero1} ${operacao} ${numero2} = ${resultado}`);
}