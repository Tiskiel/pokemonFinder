import React from 'react'
import {v4 as id} from 'uuid'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'

export default function Pokemon(props) {

    const { img, type, description, nameFr, nameJap, name} = props
    
    const types = type.map((el) => {

        switch (el) {
            case "normal":
                return <span key={nanoid() + id} className='bg-[rgb(173,165,148)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>
                
            case "fight":
                return <span key={nanoid() + id} className=' bg-[rgb(165,82,57)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>
                
            case "flying":
                return <span key={nanoid() + id} className='bg-[rgb(156,173,247)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>
                
            case "poison":
                return <span key={nanoid() + id} className=' bg-[rgb(181,90,165)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>

            case "water":
                return <span key={nanoid() + id} className=' bg-[rgb(57,156,255)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>

            case "fire":
                return <span key={nanoid() + id} className=' bg-[rgb(247,82,49)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>

            case "grass":
                return <span key={nanoid() + id} className=' bg-[rgb(123,206,82)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>

            case "electric":
                return <span key={nanoid() + id} className=' bg-[rgb(255,198,49)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>

            case "ground":
                return <span key={nanoid() + id} className=' bg-[rgb(214,181,90)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>

            case "psychic":
                return <span key={nanoid() + id} className=' bg-[rgb(255,115,165)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>

            case "rock":
                return <span key={nanoid() + id} className=' bg-[rgb(189,165,90)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>

            case "ice":
                return <span key={nanoid() + id} className=' bg-[rgb(90,206,231)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>

            case "bug":
                return <span key={nanoid() + id} className=' bg-[rgb(173,189,33)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>

            case "dragon":
                return <span key={nanoid() + id} className=' bg-[rgb(136,88,246)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>

            case "ghost":
                return <span key={nanoid() + id} className=' bg-[rgb(99,99,181)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>

            case "dark":
                return <span key={nanoid() + id} className=' bg-[rgb(115,90,74)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>

            case "steel":
                return <span key={nanoid() + id} className=' bg-[rgb(173,173,198)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>

            case "fairy":
                return <span key={nanoid() + id} className=' bg-[rgb(224,154,227)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>

                
            default: return <span key={nanoid() + id} className=' bg-[rgb(104,160,144)] rounded-md p-2 bg-opacity-70 mr-1'>{el}</span>
                
        }

        
    })
    
    return (
        <Link to={`./${name}`}>
            <div className='grid grid-cols-1 cursor-pointer'>
                <div class="place-self-center border max-w-sm rounded-lg overflow-hidden shadow-lg">
                    <div className='grid grid-cols-1 '>
                        <img class="w-40 place-self-center" src={img} alt={name} />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Nom fr : {nameFr} | Nom Japonais : {nameJap}</div>
                            <div class="text-gray-700 text-base">
                            <p>Son/ses type(s) : </p>
                            <div className='mb-2 mt-2'>                                   
                            {types}
                            </div>
                            <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

