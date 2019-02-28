class Controller{

    constructor(jogo){

        $ = document.querySelector.bind(document);
        this._jogo = jogo;
        this._entrada = $("#entrada");
        this._lacunas = $(".lacunas");
    }

    exibeLacunas(){

        this.deletaLacunas();

        this._jogo._lacunas.forEach((letra) => {

            let li = document.createElement('li');
            li.innerText = letra;
            li.classList.add('lacuna');
            this._lacunas.appendChild(li);
        })
    }

    deletaLacunas(){
        let tam = this._lacunas.childNodes.length;

        for(let i = 0; i < tam; i++){
            this._lacunas.removeChild(this._lacunas.childNodes[0]);
        }
    }

    mudaPlaceHolder(){

        this._entrada.placeholder = "Chute";
    }

    guardaPalavraSecreta(texto){

        jogo.palavraSecreta = texto;
    }

    reinicia(){

        this._jogo._reinicia();
        this.deletaLacunas();
        this._entrada.placeholder = "Palavra Secreta";
    }

    leChute(chute){

        this._jogo._processaChute(chute);
        this.exibeLacunas();
        this._entrada.value = '';

        if(this._jogo._ganhouOuPerdeu()){
            setTimeout(() => {
                if(this._jogo._ganhou()){
                    alert('Voce ganhou!');
                }
                else if(this._jogo._perdeu()){
                    alert('Voce perdeu');
                }
                this.reinicia();
            }, 500);
        }
    }

    inicia(){

        this._entrada.addEventListener( 'keypress',(e) => {
            if(e.keyCode == 13){
                if(this._entrada.value){
                    switch(this._jogo.etapa){
                        case 1:
                            this.mudaPlaceHolder();

                            this.guardaPalavraSecreta(this._entrada.value);
                            this.exibeLacunas();

                            this._entrada.value = '';
                            break;
                        case 2:
                            this.leChute(this._entrada.value);
                            break;
                    }
                }
            }
        })
    }
}
