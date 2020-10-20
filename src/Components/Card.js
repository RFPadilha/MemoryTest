import React from 'react';
import PropTypes from 'prop-types';//garante a transmissão correta de props
import './CardStyle.css';
//esse arquivo contem a definição das cartas do jogo da memória e suas propriedades
//linha 12: se carta está desabilitada, clicar não faz nada
//linha 16: referencias as imagens locais

export default function Card({handleClick, id, type, flipped, solved, height, width, disabled}){
	return <div
	className = {`flip-container ${flipped ? 'flipped' : ''}`}
	style = {{height, width, }}
	onClick = {() => disabled ? null : handleClick(id)}
	>

		<div className = "flipper">
			<img style = {{width, height, }}
			className = {flipped ? 'front' : 'back'}
			src = {flipped || solved ? require(`./Imagens/${type}.png`) : require(`./Imagens/Blank.png`)}
			alt = ""
			/>
			
		</div>
	</div>
}

Card.propTypes = {
	handleClick : PropTypes.func.isRequired,
	id : PropTypes.number.isRequired,
	type : PropTypes.string.isRequired,
	flipped : PropTypes.bool.isRequired,
	solved : PropTypes.bool.isRequired,
	height : PropTypes.number.isRequired,
	width : PropTypes.number.isRequired,
	disabled : PropTypes.bool.isRequired,
}


