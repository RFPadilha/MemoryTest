//a função desse arquivo é importar as imagens na forma de um array, e embaralhá-las

function embaralhar(array){
	const arrayCopy = array.slice(0);//faremos uma cópia do array para não prejudicar o funcionamento de JS
	for (let i=0; i<array.length -1; i++){//loop para trocar objetos do array de posição, efetivamente embaralhando
		let randomIndex = Math.floor(Math.random()*(i+1));
		let temp = arrayCopy[i];
		arrayCopy[i] = arrayCopy[randomIndex];
		arrayCopy[randomIndex] = temp;
	}
	return arrayCopy;//retorna array embaralhado
}

export default function inicializar(){
	let id = 0;
	const Images = ['AO', 'Bag', 'Bonfire', 'Check', 'Driver', 'GPS', 'Hey', 'Laugh', 'Naipe', 'Plaque', 'Potion', 'Wishbone'
	].reduce((acc, type) => {//ajuda na definição do array
		acc.push({
			id : id++,//incrementa ID das imagens
			type
		})
		acc.push({//2x pois cada imagem precisa ter um par, porém um ID diferente
			id : id++,
			type
		})
		return acc
	}, []);
	return embaralhar(Images);//retorna deck embaralhado
}