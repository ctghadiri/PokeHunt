import React, {Component} from "react";
import PokeCard from "./components/PokeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pokemon from "./pokemon.json";
import Score from "./components/Score";

console.log(pokemon)

class App extends Component {
    state = {
        // need to set something to allow the pokemon json to be seen as an array rather than a string
        pokemon,
        score: 0
    }

    catchPokemon = id => {
        const pokemonChoice = this.state.pokemon[id-1]
        console.log("hi")
        if(pokemonChoice.clicked){
            this.setState({score: 0})
            this.state.pokemon.forEach(pokemon =>{
                pokemon.clicked = false
            })
            this.setState(this.shuffle(this.state.pokemon))
            return this.setState({pokemon: pokemon})
        }
        else {
            this.setState( {
                pokemon: pokemonChoice.clicked = true,
                score: this.state.score + 1
            })
            this.setState(this.shuffle(this.state.pokemon))
            return this.setState({pokemon: pokemon})
        }
    }

    shuffle = array => {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
    }

    render () {
        return(
            <Wrapper>
                <Score score = {this.state.score} />
                <Title>Catch 'em all!</Title>

                {this.state.pokemon.map(pokemon => (
                    <PokeCard 
                        catchPokemon={this.catchPokemon}
                        id={pokemon.id}
                        image={pokemon.image}
                    />
                ))}
            </Wrapper>
    )
    };
};
export default App;