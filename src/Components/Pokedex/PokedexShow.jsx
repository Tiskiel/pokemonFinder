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
        if(number === 0 || number === '' || number >= 1000) return
        
        for(let i = 1; i<= number; i++){
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + i)
            const responseSpecies = await axios.get('https://pokeapi.co/api/v2/pokemon-species/' + i)

            const data = response.data
            const dataSpecies = responseSpecies.data
            setData(currentValue => [...currentValue, {
                tagID : nanoid(),
                name : data.name,
                nameFr : dataSpecies.names.find(el => el.language.name === "fr").name,
                type :  data.types.map((el) => el.type.name),
                nameJap : dataSpecies.names.find(el => el.language.name === "ja-Hrkt").name,
                img : data.sprites.other["official-artwork"].front_default,
                description : dataSpecies.flavor_text_entries.find(el => el.language.name === "fr").flavor_text
            }])
            
        }
        number = 0;
    }

    useEffect(() =>{

        fetch(number)
    }, [number])
    
    const handlePage = () => {

    }

    console.log(data);
    return (
        <>
            <div className='grid sm:grid-cols-2 xl:grid-cols-6 2xl:grid-cols-6 gap-4'
            onClick={handlePage}>
                {monster}
            </div>
        </>
    )
}
