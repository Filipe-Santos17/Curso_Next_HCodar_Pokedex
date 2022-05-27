import Image from "next/image"
import Link from "next/link"

export default function Card({pokemon}) {
  return (
    <section className="flex items-center justify-center flex-col py-8 px-4 mb-8 w-[23%] border-2 border-red-500 rounded-2xl shadow-lg shadow-black">
        <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} alt={`${pokemon.name}`} width="120" heigth="120"/>
        <p className="my-4 mx-0 bg-red-500 rounded p-1 text-white flex justify-center items-center">#{pokemon.id}</p>
        <h3 className="capitalize mb-4 text-lg">{pokemon.name}</h3>
        <Link href={`/pokemon/${pokemon.id}`}>
            <a className="text-none bg-white text-gray-700 py-2 px-4 rounded font-bold duration-300 hover:bg-red-500 hover:text-white">Detalhes</a>
        </Link>
    </section>
  )
}
