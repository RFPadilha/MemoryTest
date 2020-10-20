import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './BoardStyle.css';

export default function Board({dimension, cards, flipped, handleClick, disabled, solved}){
	return <div className = "board">
				{cards.map((card) => (//necessário para dispor as cartas como um array
				<Card 
					key = {card.id}
    				id = {card.id}
    				type = {card.type}
    				width = {dimension/4}
    				height = {dimension/4}
    				flipped = {flipped.includes(card.id)}
    				solved = {solved.includes(card.id)}
    				handleClick = {handleClick}
    				disabled = {disabled || solved.includes(card.id)}//impede que cartas já resolvidas sejam clicadas
    				//definição dos atributos das cartas
    			/>
    		))}
    	</div>
}

Board.propTypes = {
	dimension : PropTypes.number.isRequired,
	cards : PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	flipped : PropTypes.arrayOf(PropTypes.number).isRequired,
	solved : PropTypes.arrayOf(PropTypes.number).isRequired,
	handleClick : PropTypes.func.isRequired,
	disabled : PropTypes.bool.isRequired,
}
