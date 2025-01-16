const largura_parede = document.getElementById('largura_parede')
const altura_parede = document.getElementById('altura_parede')
const resultado = document.getElementById('resultado')
const calculo = document.getElementById('calculo')
const quantidade_latas = document.getElementById('latas_tinta')

calculo.addEventListener('click', ()=>{
    let largura = parseFloat(largura_parede.value)
    let altura = parseFloat(altura_parede.value)

    let area = largura * altura
    let latas_tinta = area /2

    resultado.innerHTML = `Sua parede tem dimensão de 
    ${largura} x ${altura} e sua area é de ${area}m²`
    
    quantidade_latas.innerHTML = `Para pintar essa parede, 
    voce precisara de ${latas_tinta}l de tinta`
})