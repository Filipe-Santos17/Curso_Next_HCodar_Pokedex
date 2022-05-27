import Image from "next/image"
import Card from "../components/Card";

export async function getStaticProps(){
  const maxPokemons = 251, //Numero maximo de pokemons que podem ser carregados
  api = "https://pokeapi.co/api/v2/pokemon"

  const res = await fetch(`${api}/?limit=${maxPokemons}`),
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
    <>
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-red-500 text-4xl items-center mr-1">Poke<span className="text-gray-500">Next</span></h1>
        <Image src="/Images/pokeball.png" alt="pokebola" width="50" height="50"/>
      </div>
      <div className="flex flex-wrap justify-between items-center max-w-5/6 my-0 mx-auto">
        {pokemons.map((pokemon) => {
          <Card pokemon={pokemon}/>
        })}
      </div>
    </>
  )
}
