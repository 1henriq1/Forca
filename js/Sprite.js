class Sprite {

    constructor(elemento){
        $ = document.querySelector.bind(document);
        this._elemento = $(elemento);
        this._frame = 1;
        this._isFinished = false;
    }

    nextFrame(){

        if(this._frame > 8){
            this._isFinished = true;
            return;
        }
        else {

            this.adicionaClasse();
            this.removeClasse();
            this._frame++;
        }
    }

    reset(){

        this.removeClasse();
        this._frame = 1;
        this._isFinished = false;
    }

    removeClasse(){

        this._elemento.classList.remove('frame'+(this._frame));
    }

    adicionaClasse(){

        this._elemento.classList.add('frame'+(this._frame+1));
    }

    get isFinished(){

        return this._isFinished;
    }

}
