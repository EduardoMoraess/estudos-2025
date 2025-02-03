/*
Exercício 2: (Conversor de Temperatura):
1-Peça para o usuário inserir uma temperatura em graus Celsius.
2-Converta essa temperatura para Fahrenheit usando a fórmula: F=(C×9/5)+32
3-Exiba o resultado no console.
*/

let temp_C = Number(prompt('Digite uma temperatura em Celsius:'));

let temp_F = (temp_C * 9/5) + 32;

alert(`Sua temperatura de ${temp_C}°C equivale a ${temp_F}°F`);