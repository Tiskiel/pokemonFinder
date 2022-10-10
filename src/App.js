import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import PokemonDetails from './Components/Pages/PokemonDetails/PokemonDetails';
import FullPokedex from './Components/Pages/FullPokedex/FullPokedex';

function App() {


  return (
    <div>
        <Routes>
          <Route path='/home' element={<FullPokedex />} />
          <Route path='/pokemon/:pokemonID' element={<PokemonDetails />} />
          <Route path='*' element={<Navigate to="/home" replace/>}/>
        </Routes>
    </div>
  );
}

export default App;