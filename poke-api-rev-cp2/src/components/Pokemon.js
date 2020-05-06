import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Pokemon = ({ pokemon, deletePokemon }) => {

    useEffect(() => {
        Axios.get(`${pokemon.url}`)
            .then(response => console.log(response.data))
    }, [])

    return (
        <div>name : 
            <Link to={{pathname:"/pokemon/${pokemon.id}", state: pokemon}}>{pokemon.name}</Link>
            <button onClick={() => deletePokemon(pokemon.name)}>Delete</button>
        </div>
    )
}

export default Pokemon;