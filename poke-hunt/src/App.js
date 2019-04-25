import React, {Component} from "react";
import PokeCard from "./components/PokeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pokemon from "./pokemon.json";

console.log(pokemon)

class App extends Component {
    state = {
        pokemon,
        caught = [],
        score = 0
    }

    catchPokemon = id => {
        const pokemonChoice = this.state.pokemon[id-1]
        if(this.state.caught.includes(pokemonChoice)){
            this.setState({
                caught: [],
                score: 0
            });
        }
        else {
            this.setState(state => {
                const caught = state.caught.concat(pokemonChoice)

                return {
                    caught,
                    score: state.score + 1
                }
            });
        }
        this.setState({caught})
    }

    function shuffle ()


    render () {
        return(
            <Wrapper>
                <Score score = {this.state.score} />
                <Title>Catch 'em all!</Title>

                {this.state.pokemon.map(pokemon => (
                    <PokeCard onClick={this.catchPokemon}
                        id={pokemon.id}
                        image={pokemon.image}
                    />
                ))}
            </Wrapper>
    )
    };
};
export default App;