function jogo(){
    const Tentativa = document.getElementById('tentativa')
    const Chute = document.getElementById('chute')

    Tentativa.addEventListener('click', ()=>{
        let acerto = Chute.value.trim()
        if(acerto === 'tentei'){
            alert('Voce acerto miseravel')
        }
        else{
            alert('voce errou feio')
        }
    })

}
jogo()