import logo from './logo.svg';
import './App.css';
import PokedexForm from './Components/Pokedex/PokedexForm';
import Pokedex from './Components/Pokedex/Pokedex';
import { useState } from 'react';
import PokedexShow from './Components/Pokedex/PokedexShow';


function App() {
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
  );
}

export default App;
