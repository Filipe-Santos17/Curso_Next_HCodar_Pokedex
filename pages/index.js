export async function getStaticProps(){
  const maxPokemons = 251, //Numero maximo de pokemons que podem ser carregados
  api = "https://pokeapi.co/api/v2/pokemon/"

  const res = await fetch(`${api}?limit=${maxPokemons}`),
  data = await res.json()

  //add pokemon id
  data.results.forEach((item,index) => {
    item.id = index + 1
  });

  return {
    props: {
      pokemons : data.results
    }
  }
}

export default function Home({pokemons}) {
  return (
    <div className="">
      <h1 className="text-red-500">Pokemons</h1>
      <ul>
        {pokemons.map(pokemon => {
          <li key={pokemon.id}>{pokemon.name}</li>
        })}
      </ul>
    </div>
  )
}
