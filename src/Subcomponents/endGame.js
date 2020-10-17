import React from 'react';

class endGame extends React.Component {
	handleClick = () =>{
		this.props.newGame(false);
	};
	render(){
		return(
			<div className="end-game">
        		<div className="message">
         		 <h2>{"Parabens"}</h2>
          			<p>{"Quer ir denovo?"}</p>
          			<button onClick={this.handleClick}>
            			Sim
          			</button>
        		</div>
      		</div>)
	}

}

export default endGame;