import './buscador.css'
import { Buscar } from './Icons';

function Buscador({ busqueda, setBusqueda, buscarPokemon }) {
  
  return (
    <>
      <h3 className='titulo'>Descubra sobre todos os Pokémon!</h3>
      <form className='container-buscar' onSubmit={buscarPokemon}>
        <input type="text" placeholder='Buscar Pokémon. ex: Gliscor' className='input-buscar'
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)} />
        <button className='btn-buscar' type='submit'>
          <Buscar />
          Buscar pokémon
        </button>
      </form>
    </>
  )
}

export default Buscador;