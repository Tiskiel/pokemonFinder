import React, { useState } from 'react'


export default function PokedexForm(props) {
    const { getName } = props
    const { getNumber } = props

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    

    const resetInput = (funct, number) => {
        funct(number)
        setNumber('')
    }
    
    return (
        <div className='grid grid-cols-4 gap 4 justify-items-center pt-3'>
            <img src={process.env.PUBLIC_URL + '/assets/logoPkm.png'}  alt='title' className='object-contain h-4/6 w-1/4...' />
            <div className="grid grid-cols-2">
                <label for="message" class="text-left place-self-center col-span-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"></label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Entrez un Pokémon'
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-9"
                /><span><button onClick={() => getName(name) }
                className="mb-5 w-28 m-auto px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg w-">
                Send</button></span>
            </div>
            <div className="grid grid-cols-2">
                <label for="message" class="place-self-center col-span-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"></label>
                <input value={number} onChange={e => setNumber(e.target.value)} placeholder='X premiers Pokémon'
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-9"
                /><span><button onClick={() => resetInput(getNumber, number) }
                className="mb-5 w-28 m-auto px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg w-">
                Send</button></span>
            </div>
            <img src={process.env.PUBLIC_URL + '/assets/starter.png'} alt='starter' className='object-contain h-4/6 w-1/4...' />
        </div>
    )
}
