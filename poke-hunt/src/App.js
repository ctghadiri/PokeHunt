import React, {Component} from "react";
import PokeCard from "./components/PokeCard";
import Wrapper from "./components/Wrapper";
import pokemon from "./pokemon.json";

class App extends Component {
    state = {
        pokemon
    }
}

render () {
    return(
        <Wrapper>
            <Title>Catch 'em all!</Title>
            {this.state.map(pokemon => (
                <PokeCard
                    id={pokemon.id}
                    image={pokemon.image}
                />
            ))}
        </Wrapper>
    )
};

export default App;