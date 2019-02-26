class Jogo {
    constructor(sprite){

        this._sprite = sprite;
        this._palavraSecreta;
        this._lacunas = [];
        this._etapa = 1;
    }

    _processaChute(chute){
        //if(this._palavraSecreta.includes(chute)) {
        let acertou = false;
        let re = new RegExp(chute, 'gi');
        let xp;

        while (xp = re.exec(this._palavraSecreta)){
            acertou = true;
            this._lacunas[xp.index] = chute;
        }
        if(!acertou){
            this._sprite.nextFrame();
        }

    }

    _ganhou(){

        if((this._palavraSecreta == this._lacunas.join('')) && this._palavraSecreta.length > 0)
            return true;
        else
            return false;
    }

    _perdeu(){

        return this._sprite.isFinished;
    }

    _ganhouOuPerdeu(){
        
        return ganhou() || perdeu();
    }

    _reinicia(){
        this._sprite.reset();
        this._palavraSecreta = '';
        this._lacunas = [];
        this._etapa = 1;
    }

    set palavraSecreta(palavra){

        this._palavraSecreta = palavra;
        this._criaLacunas();
        this.proximaEtapa();
    }

    _criaLacunas(){

        this._lacunas = Array(this._palavraSecreta.length).fill('');
        //this._palavraSecreta.split('').forEach( c => this._lacunas.push(''));
    }

    get lacunas(){

        return this._lacunas;
    }

    get etapa(){

        return this._etapa;
    }

    proximaEtapa(){

        this._etapa++;
    }

}
