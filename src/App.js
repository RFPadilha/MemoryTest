import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './Components/Board';
import inicializar from './Components/Images';

export default function App() {
	const [cards, setCards] = useState([]);//inicializa com array vazio, ["getter", "setter"]
	const [flipped, setFlipped] = useState([]);//usado para ganchos
	const [dimension, setDimension] = useState(400);
	const [solved, setSolved] = useState([]);//usado na detecção de imagens pareadas
	const [disabled, setDisabled] = useState(false);//desabilita cliques nas imagens
	const [userName, setUserName] = useState([]);

  	const handleChange = (event) => {
    	setUserName(event.target.value);
  	}

  	const handleSubmit = (event) => {
    	event.preventDefault();
    	alert("Name Entered!");//alerta para testar funcionalidade
  	}

	let tentativas = 0;

	useEffect(()=> {
		resizeBoard();
		setCards(inicializar())//inicializa baralho embaralhado
	}, [])

	const handleClick = (id) => {
		setDisabled(true);
		if(flipped.length === 0){
			setFlipped([id]);
			setDisabled(false);
		}else{
			if (doubleClicked(id)) return;
			setFlipped([flipped[0], id])
			if (isMatched(id)) {
				setSolved([ ...solved, flipped[0], id])//... representa todos que já foram incluídos no array, flipped é o que foi clicado, adicionando o novo "id"
				resetCards();//permite continuar jogando após parear corretamente
				
			}else {
				setTimeout(resetCards, 2000);//espera 2s antes de desvirar as cartas da tentativa atual
			}
		}
	}

	const doubleClicked = (id) => flipped.includes(id);

	const resetCards = () => {
		setFlipped([]);//reseta o array de cartas viradas
		setDisabled(false);//permite continuar virando cartas
		tentativas++;
		winCondition();
	}

	const isMatched = (id) => {//usado para comparar o par de cartas clicadas
		const clickedCard = cards.find(card => card.id === id);
		const flippedCard = cards.find(card => flipped[0] === card.id);
		return clickedCard.type === flippedCard.type;
	}

	const resizeBoard = () => {
		setDimension(Math.min(
			document.documentElement.clientWidth, 
			document.documentElement.clientHeight))//redimensiona app para caber na janela
	}

	const winCondition = () => {
		if (cards[0]=== null){
			alert("Parabéns " + userName + " você completou o jogo em " + tentativas + " tentativas!");
		}
	}

	useEffect(() => {
		const resizeListener = window.addEventListener('resize', resizeBoard);
		return () => window.removeEventListener('resize', resizeListener);//limpeza de código quando componente desmontar
	})

	
  return (
  	<React.Fragment>
	    	<form onSubmit={handleSubmit}>
            	<label>
          			------ Nome:
      	  	  	<input type="text" onChange={handleChange} />
    	       	</label>
	       	    <input type="submit" value="Submit" />
      	    </form>
	    <Board
	    	dimension = {dimension}
	    	cards = {cards}
	    	flipped = {flipped}
	    	handleClick = {handleClick}
	    	disabled = {disabled}
	    	solved = {solved}
	    	/>
	</React.Fragment>
  );
}

