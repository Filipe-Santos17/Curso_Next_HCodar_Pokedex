import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-4 py-2 px-3 text-white bg-gray-500">
        <div className="flex justify-center items-center">
            <Image src="/images/pokeball.png" alt="Pokenext logo" width="30" height="30"/>
            <h1 className="ml-1 text-xl">PokeNext</h1>
        </div>
        <ul className="flex ">
            <li className="mr-3"><Link href="/"><a className="text-white p-1 transition border-b-2 border-transparent hover:border-white">Home</a></Link></li>
            <li className="mr-3"><Link href="/about"><a className="text-white p-1 transition border-b-2 border-transparent hover:border-white">Sobre</a></Link></li>
        </ul>
    </nav>
  )
}