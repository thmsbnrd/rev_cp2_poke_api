import React, { Component } from 'react';
import Axios from 'axios';

import Pokemon from './Pokemon';

class ListOfPokemon extends Component {
    state = {
        pokemons: []
    }

    componentDidMount() {
        Axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.data.results)
            .then(data => this.setState({ pokemons: data }))
    }

    deletePokemon = () => {
        console.log('delete')
    }

    render() {
        const { pokemons } = this.state;
        return (
            <div>
                <div>Page List Pokemon</div>
                {pokemons.map(pokemon => <Pokemon pokemon={pokemon} deletePokemon={this.deletePokemon} />)}
            </div>
        )
    }
}

export default ListOfPokemon;