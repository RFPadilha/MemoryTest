import React from 'react';
import {Images} from "./images.js"

class internalLogic extends React.Component{
	cards = [];//array de cartas reveladas
	handleClick = (event) =>{
		let card = event.target;
		if(card.getAttribute("check")==="found"){
			return;
		}//se carta já foi pareada, simplesmente nada acontece

		if(card !== this.cards[0]){
			this.switch(card);
			this.cards.push(card);//se a carta for diferente da primeira do array(a primeira carta revelada nessa tentativa),
								  //coloca ela no final do array
		}else {
			this.switch(card);
			this.cards = [];//se forem iguais, esvazia o array
		}


		if(this.cards.length>2){//se mais de 2 cartas forem reveladas:
			if(!this.isMatched(this.cards[0], this.cards[1])){//se as 2 primeiras cartas são diferentes:
				this.switch(this.cards[0]);
				this.switch(this.cards[1]);//esconde as 2 primeiras cartas
				this.cards.shift();
				this.cards.shift();//remove do array de cartas reveladas
			}else{//se forem iguais
				this.cards.shift();//remove as cartas do array, possibilitando futuras comparações
				this.cards.shift();
			}
		}

		let allImages = document.getElementsByClassName("blankCard");

		if(allImages.length<1){//se não houverem mais cartas voltadas para baixo
			this.props.endGame(true);//ativa "endGame"
			let reset = document.getElementsByClassName("Images");
			for(let i=0; i<reset.length; i++){//reseta o jogo
				reset[i].classList.add("blankCard");
				reset[i].setAttribute("check", "false");
				this.cards = [];
			}
		}
	}

	isMatched = (firstCard, secondCard) => {//verifica se as cartas foram corretamente pareadas
		if(firstCard.getAttribute("name") === secondCard.getAttribute("name")){
			firstCard.setAttribute("check", "found");
			secondCard.setAttribute("check", "found");
			return true;
		}
		return false;
	}

	switch = (target) =>{//vira cartas
		if(target.getAttribute("Check")==="true"){
			target.setAttribute("check", "false");
			target.classList.add("blankCard");
		}else{
			target.setAttribute("check", "true");
			target.classList.remove("blankCard");
		}
	}

	render() {
   		return (
      		<div className="Images">
        		{Images
          		.sort(() => Math.random() - 0.5)//embaralha cartas
         		 .map((element) => {
            		return (//dispõe cartas na tela, voltadas para baixo
             		 	<div>
                			className="Images blankCard"
                			name={element.name}
                			style={{ background: `url(${element.pic})` }}
                			check="false"
                			onClick={this.handleClick}
              			</div>
            		);
          		})}
      		</div>
    	);
  	}
}

export default internalLogic;