alert('bem vindo ao jogo');

const numeroSecreto = 5;
console.log(numeroSecreto);

let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt('Ecolha um numero de 0 a 10')
    if(chute == numeroSecreto){
        break
    }
    else{
        if(chute > numeroSecreto){
            alert(`o numero secreto é menor que ${chute}`)
        }
        else{
            alert(`O numero secreto é maior que ${chute}`)
        }
        tentativas++;
    }
}
alert(`Isso ai voce descobriu o numero secreto ${numeroSecreto}`)


function button(){
    const res = document.getElementById('res')

    res.innerHTML = 'SO TEM PROXIMA FASE QUANDO O SOL ESFRIAR'
}