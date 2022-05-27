import Image from "next/image"

export default function About() {
  return (
    <section className="text-center">
        <h1 className="text-xl mb-3">Sobre o Projeto</h1>
        <p className="mb-4 max-w-[48rem] mx-auto my-0 leading-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <Image src="/images/charizard.png" alt="charizard pokemon" width="300" height="300"/>
    </section>
  )
}
