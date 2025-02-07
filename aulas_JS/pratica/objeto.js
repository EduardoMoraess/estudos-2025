const pessoa = {
    nome: 'Edu',
    idade: 20,

    dizerOi: function(){
        console.log(`OI, meu nome é ${this.nome}`);
    }
};

pessoa.dizerOi();