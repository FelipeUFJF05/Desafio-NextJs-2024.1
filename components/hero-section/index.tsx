import Link from "next/link";

export default function HeroSection() {
    return(
        <div className="h-screen bg-cover bg-center flex flex-col justify-center items-center bg-hero">
            <h1 className="text-3xl lg:text-6xl text-white font-semibold text-center mb-4 mx-20">Seja bem-vindo(a) a <span className="text-red-600">IRONPULSE</span>, a melhor loja de equipamentos e suplementos para o seu corpo!</h1>
            <h2 className="text-xl lg:text-3xl text-white font-semibold text-center mb-8 mx-12">Somos capacitados para atender todos os tipos de atletas! Vem com a gente que não tem erro!</h2>
            <div className="flex gap-8 px-8 py-4">
                <Link href='/produtos'>
                    <button className="text-2xl text-white border-2 border-white py-3 px-8 bg-red-950 rounded-full hover:bg-white hover:text-black hover:border-transparent transition duration-300 ease-in-out hover:border-black">
                        Comprar
                    </button>
                </Link>
                <Link href='/login'>
                    <button className="text-2xl text-white border-2 border-red-600 py-3 px-8 bg-transparent rounded-full hover:bg-red-600 hover:text-white transition duration-300 ease-in-out">
                        Entrar
                    </button>
                </Link>
            </div>
        </div>
    )
}