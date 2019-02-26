class Jogo {
    constructor(sprite){

        this._sprite = sprite;
        this._palavraSecreta;
        this._lacunas = [];
        this._etapa = 1;
    }

    _processaChute(chute){
        //if(this._palavraSecreta.includes(chute)) {

        let re = new RegExp(chute, 'gi');
        //;if(re.exec(this._palavraSecreta)){
        console.log(re.exec(this._palavraSecreta));
            //this._lacunas[this._palavraSecreta.indexOf(chute)] = chute;
        //}
        //else {
        //    console.log('errô');
        //    this._sprite.nextFrame();
        //}
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

    reset(){

        this._palavraSecreta = '';
        this._lacunas = [];
        this._etapa = 1;
    }
}
