export const getStaticPaths = async () => {
    const maxPokemons=251
    const api='https://pokeapi.co/api/v2/pokemon/"
    const res=await fetch(${api}/?limit=${maxPokemons}")
    const data=await res.json()
}

export const getStaticProps = async context => {
    
}

export default function PokemonId() {
  return (
    <div>

    </div>
  )
}
