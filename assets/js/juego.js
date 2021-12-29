let deck = [];
const tiposcartas = ['C', 'D', 'H', 'S'];

const crearDeck = () => {
    for(let i = 2; i <= 10; i++){
        for(let tipo of tiposcartas){
            deck.push( i + tipo) 
        }
        // 
    }
    console.log(deck)
}


crearDeck();