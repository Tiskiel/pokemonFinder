import React, { useState } from 'react'
import Pokedex from '../../Pokedex/Pokedex'
import PokedexForm from '../../Pokedex/PokedexForm'
import PokedexShow from '../../Pokedex/PokedexShow'

export default function FullPokedex() {
    const [name, setName] = useState("pikachu")
    const [number, setNumber] = useState('')
    
    const onName = (pkmn) => {
        setName(pkmn)
    }
    
    const onNumber = (num) => {
        setNumber(num)
    }

    return (
        <div>
            <PokedexForm getName={onName} getNumber={onNumber}/>
            <br />
            <Pokedex pkmn={name} />
            <br />
            <PokedexShow number={number}/>
        </div>
    )
}
