import React, { Component } from 'react';

const PokemonDetails = (props) => {
    const { location } = props;
    console.log(location.query)
    return (
        <div>Page PokemonDetails
            <h1>{location.query.name}</h1>
            <img src={location.query.sprites.front_default} /> 
            <div>{location.query.height * 10} cm</div>
            <div>{location.query.weight / 10} Kg</div>
        </div>
    )
}

export default PokemonDetails;