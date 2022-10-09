import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon';
import { nanoid } from 'nanoid';

export default function PokedexShow(props) {
    const [data, setData] = useState([])

    const {number} = props;

    const monster = data.map((pokemon) => (
        <Pokemon key={pokemon.tagID} {...pokemon} />
    ))

    const fetch = async (number) => {
        if(number === 0 || number === '') return
        const pokemons = []
        for(let i = 1; i<= number; i++){
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + i)
            const responseSpecies = await axios.get('https://pokeapi.co/api/v2/pokemon-species/' + i)

            const data = response.data
            const dataSpecies = responseSpecies.data
            pokemons.push({
                tagID : nanoid(),
                name : data.name,
                nameFr : dataSpecies.names.find(el => el.language.name === "fr").name,
                type :  data.types.map((el) => el.type.name),
                nameJap : dataSpecies.names.find(el => el.language.name === "ja-Hrkt").name,
                img : data.sprites.other["official-artwork"].front_default,
                description : dataSpecies.flavor_text_entries.find(el => el.language.name === "fr").flavor_text
            })
            
        }
        setData(pokemons)
        number = 0;
    }

    useEffect(() =>{
        fetch(number)
    }, [number])

    console.log(data);
    return (
        <>
            <div className='grid sm:grid-cols-2 xl:grid-cols-6 2xl:grid-cols-6 gap-4'>
                {monster}
            </div>
        </>
    )
}
