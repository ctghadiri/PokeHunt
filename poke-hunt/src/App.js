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
        const pokemon = this.state.pokemon
        if(this.state.caught.includes(pokemon)){
            this.state.caught = [];
            this.state.score = 0;
        }
        else {
            this.state.caught.push(pokemon);
            this.state.score += 1;
        }
        this.setState({caught})
    }


    render () {
        return(
            <Wrapper>
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