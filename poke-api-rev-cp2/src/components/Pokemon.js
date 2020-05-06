import React from 'react';

const Pokemon = ({ pokemon, deletePokemon }) => {
    return (
        <div>name : {pokemon.name}<button onClick={() => deletePokemon()}>Delete</button></div>
    )
}

export default Pokemon;