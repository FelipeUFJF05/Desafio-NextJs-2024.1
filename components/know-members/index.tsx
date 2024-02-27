import Image from "next/image";
import Link from "next/link";

export default function KnowMembers() {
    return(
        <div className="min-h-screen flex flex-col-2 justify-end text-right items-center px-4 md:px-10 lg:px-10">
            <div>
                <Image 
                src="/Home/images/leao-direita.png"
                alt="Leão vermelho de perfil"
                width={500}
                height={1000}
                className="hidden md:block lg:block xl:block 2xl:block 3xl:block 4xl:block 5xl:block"
                />
            </div>
            <div className="pr-4 md:pr-14 lg:pr-14 xl:pr-14 2xl:pr-14 w-3/4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-black font-bold py-4 mb-8">Conheça a equipe <span className="text-red-600 font-extrabold">IRONPULSE</span></h1>
                <h2 className="text-lg lg:text-2xl text-black font-semibold py-4 break-words mb-8 pl-10">Na IRONPULSE, temos o orgulho de contar com uma equipe diversificada e talentosa, dedicada a oferecer o melhor serviço aos nossos clientes. Nosso time é composto por profissionais apaixonados e comprometidos, unidos pelo objetivo comum de alcançar a excelência em tudo o que fazemos.</h2>
                <Link href='/membros'>
                    <button className="text-xl md:text-2xl text-white border-2 border-white py-3 px-8 bg-red-600 rounded-full hover:bg-white hover:text-black hover:border-black transition duration-300 ease-in-out mb-8">
                        Conhecer Membros
                    </button>
                </Link>
            </div>
        </div>
    )
}