import Link from "next/link";

export default function AboutUS() {
    return(
        <div className="min-h-screen bg-cover bg-center flex flex-col-2 justify-left items-center px-16 bg-background-mulher_com_peso">
            <div className="pr-14 w-3/4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold py-4 mb-8">Entre em contato conosco!</h1>
                <h2 className="text-xl lg:text-2xl text-white font-semibold py-4 break-words">Caso possua alguma dúvida, sugestão ou então deseja conversar e saber um pouco mais sobre nossos planos e produtos, não hesite em entrar em contato com nossa equipe!</h2>
                <h2 className="text-xl lg:text-2xl text-white font-semibold py-4 mb-8">A equipe <span className="text-red-600 font-semibold">IRONPULSE</span> ficará muito feliz em atender você!</h2>
                <Link href='/contatos'>
                    <button className="text-xl md:text-2xl lg:text-2xl text-white border-2 border-white py-3 px-8 bg-red-950 rounded-full hover:bg-white hover:text-black hover:border-transparent transition duration-300 ease-in-out mb-8">
                        Entre em Contato
                    </button>
                </Link>
            </div>
        </div>
    )
}