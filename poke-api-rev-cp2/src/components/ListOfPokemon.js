import React, { Component } from 'react';
import Axios from 'axios';

class ListOfPokemon extends Component {
    state = {
        pokemon: []
    }

    componentDidMount() {
        Axios.get('https://pokeapi.co/api/v2/pokemon')
    }

    render() {
        return (
            <div>Page List Pokemon</div>
        )
    }
}

export default ListOfPokemon;