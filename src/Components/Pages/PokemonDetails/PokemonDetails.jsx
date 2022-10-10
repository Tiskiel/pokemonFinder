import React from 'react'
import {useParams} from 'react-router-dom'

export default function PokemonDetails() {

    const { pokemonID } = useParams()
    console.log(pokemonID)
    return (
        <div>PokemonDetails</div>
    )
}
