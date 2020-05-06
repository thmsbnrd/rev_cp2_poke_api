import React from 'react';
import { Link } from 'react-router-dom';

const Pokemon = ({ pokemon, deletePokemon }) => {
    return (
        <div>name : 
            <Link to={{path:"/pokemon/:id", state: pokemon}}>{pokemon.name}</Link>
            <button onClick={() => deletePokemon(pokemon.name)}>Delete</button>
        </div>
    )
}

export default Pokemon;