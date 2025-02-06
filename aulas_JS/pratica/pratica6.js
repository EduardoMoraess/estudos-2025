/*
Exercício: Verificador de Idade
Crie um programa que:
1-Peça para o usuário digitar a sua idade.
2-Verifique se ele é menor de idade (menos de 18 anos) ou maior de idade (18 anos ou mais).
3-Exiba a mensagem apropriada usando alert().
*/

let idade = Number(prompt('digite sua idade'))

if(idade >=18){
    alert('Voce ja é de maior')
}
else{
    alert('Voce é de menor')
}