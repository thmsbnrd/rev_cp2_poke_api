import React, { Component } from 'react';
import Axios from 'axios';

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
            <div>Page List Pokemon</div>
        )
    }
}

export default ListOfPokemon;