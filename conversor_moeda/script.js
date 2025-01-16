const valor_real = document.getElementById('valor_real');
const converter = document.getElementById('converter');
const dolar_real = document.getElementById('dolar_real');


converter.addEventListener('click', () => {
    let real = parseFloat(valor_real.value);
    let valor_dolar = real / 6.10

    dolar_real.innerHTML = `Seu valor em R$ ${real} vale US$ ${valor_dolar.toFixed(2)}`;
});