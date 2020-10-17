import React from 'react';
import nameInput from './nameInput';
import endGame from './endGame';
import game from './game';

class main extends React.Component {
	state = {
		showNameInput : true,//inicia pedindo a inserção do nome do jogador
		showEndGame : false,
		name :"",
	};

	handleNameInput = (name, boolean) => {
		this.setState({name: name, showNameInput: boolean});
	};

	handleEndGame = (boolean) => {
		if(boolean){
			this.setState({showEndGame: boolean});
		}else{
			this.setState({showEndGame: boolean});
		}
	};
	render() {
		const {showNameInput, showEndGame, name} = this.state;
		return(
			<div>
			{showNameInput ? <nameInput name = {this.handleNameInput}/> : null}
			{showEndGame ? <endGame newGame={this.handleEndGame}/> : null}
			<game endGame={this.handleEndGame}/>
			</div>
			);
	}
}

export default main;