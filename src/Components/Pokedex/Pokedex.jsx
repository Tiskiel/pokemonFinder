import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';

export default function Pokedex(props) {
    const [name, setName] = useState('')
    const [imgPkm, setImgPkm] = useState('')
    const [type, setType] = useState([])
    const [description, setDescription] = useState([])
    const [nameFr, setNameFr] = useState([])
    const [nameJap, setNameJap] = useState([])

    const {pkmn} = props
    const types =  type.map((el) => {
        switch (el) {
            case "normal":
                return <span key={nanoid() + el.tagID} className='bg-[rgb(173,165,148)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>
                
            case "fight":
                return <span key={nanoid() + el.tagID} className=' bg-[rgb(165,82,57)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>
                
            case "flying":
                return <span key={nanoid() + el.tagID} className='bg-[rgb(156,173,247)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>
                
            case "poison":
                return <span key={nanoid() + el.tagID} className=' bg-[rgb(181,90,165)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>

            case "water":
                return <span key={nanoid() + el.tagID} className=' bg-[rgb(57,156,255)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>

            case "fire":
                return <span key={nanoid() + el.tagID} className=' bg-[rgb(247,82,49)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>

            case "grass":
                return <span key={nanoid() + el.tagID} className=' bg-[rgb(123,206,82)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>

            case "electric":
                return <span key={nanoid() + el.tagID} className=' bg-[rgb(255,198,49)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>

            case "ground":
                return <span key={nanoid() + el.tagID} className=' bg-[rgb(214,181,90)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>

            case "psychic":
                return <span key={nanoid() + el.tagID} className=' bg-[rgb(255,115,165)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>

            case "rock":
                return <span key={nanoid() + el.tagID} className=' bg-[rgb(189,165,90)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>

            case "ice":
                return <span key={nanoid() + el.tagID} className=' bg-[rgb(90,206,231)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>

            case "bug":
                return <span key={nanoid() + el.tagID} className=' bg-[rgb(173,189,33)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>

            case "dragon":
                return <span key={nanoid() + el.tagID} className=' bg-[rgb(136,88,246)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>

            case "ghost":
                return <span key={nanoid() + el.tagID} className=' bg-[rgb(99,99,181)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>

            case "dark":
                return <span key={nanoid() + el.tagID} className=' bg-[rgb(115,90,74)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>

            case "steel":
                return <span key={nanoid() + el.tagID} className=' bg-[rgb(173,173,198)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>

            case "fairy":
                return <span key={nanoid() + el.tagID} className=' bg-[rgb(224,154,227)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>

                
            default: return <span key={nanoid() + el.tagID} className=' bg-[rgb(104,160,144)] rounded-md bg-opacity-70 mr-1 p-2'>{el}</span>
    }} )

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + pkmn).then(
        ({data}) => {
            setName(data.name)
            setImgPkm(data.sprites.other["official-artwork"].front_default)
            setType(data.types.map((el) => el.type.name))
            
        })
    }, [pkmn])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon-species/' + pkmn).then(
            ({data}) => {
                setDescription(
                    data.flavor_text_entries.find(el => el.language.name === "fr"))
                setNameFr(
                    data.names.find(el => el.language.name === "fr")
                )
                setNameJap(
                    data.names.find(el => el.language.name === "ja-Hrkt")
                )
            }
        )
    }, [pkmn])

    return (
        <div className='grid grid-cols-1'>
            <div class="place-self-center border max-w-sm rounded-lg overflow-hidden shadow-lg">
                <div className='grid grid-cols-1 '>
                    <img class="w-52 place-self-center" src={imgPkm} alt={name} />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"><h3>Nom fr : {nameFr.name} | Nom Japonais : {nameJap.name}</h3></div>
                        <div class="text-gray-700 text-base">
                        <p>Son/ses type(s) : </p>
                            <div className='mb-2 mt-2'>
                                {types}
                            </div>
                        <p>{description.flavor_text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


