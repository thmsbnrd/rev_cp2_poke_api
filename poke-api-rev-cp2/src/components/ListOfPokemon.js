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

    render() {
        console.log(this.state.pokemons)
        return (
            <div>
                <div>Page List Pokemon</div>
                <Pokemon />
            </div>
        )
    }
}

export default ListOfPokemon;