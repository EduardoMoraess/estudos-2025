/*
Exercício: Verificador de Nome de Usuário
Crie um programa que:
1-Peça para o usuário digitar o seu nome de usuário.
2-Verifique se o nome de usuário contém pelo menos 6 caracteres.
3-Exiba uma mensagem de sucesso ou erro, dependendo da validação.
*/

let nome_user = prompt('Dgite seu nome de usuario!:');

if(nome_user.length >= 6){
    alert('Seu nome de usuario é valido!');
}
else{
    alert('Seu nome de usuario não é valido!');
}