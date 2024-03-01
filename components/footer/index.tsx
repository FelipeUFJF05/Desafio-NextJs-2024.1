import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(
        <div className="bg-red-950 min-h-[250px] flex flex-col cols-3 justify-center items-center md:flex-wrap md:justify-between md:items-center lg:flex-wrap lg:justify-between lg:items-center w-full mx-auto py-8 px-4 mb-0">
            <div>
                <Link href='/' className="flex gap-4 items-center">
                    <Image
                    src='/Home/logos/logo2.png'
                    width={600}
                    height={600}
                    alt="Logo do Site"
                    className="w-60 h-60 rounded-xl mb-8"
                    />
                </Link>
            </div>
            <div className="text-2xl text-white p-2 rounded-xl cursor-default">
                <h1 className="text-3xl">Sobre Nós:</h1>
                <div className="mt-2 flex items-center justify-center flex-col mb-8">
                    <h2>Missão</h2>
                    <h2>Visão</h2>
                    <h2>Valores</h2>
                </div>
                
            </div>
            <div className="text-2xl text-white p-2 rounded-xl">
                <h1 className="text-3xl">Nossas Redes Sociais:</h1>
                <div className=" mt-2 flex space-x-4 justify-center items-center">
                    <Link href='https://www.instagram.com/codejr/' className="">
                        <Image
                        src='/Home/social-media/instagram-logo.png'
                        width={40}
                        height={40}
                        alt="Logo do Site"
                        className="w-10 h-10 rounded-xl"
                        />
                    </Link>
                    <Link href='/' className="">
                        <Image
                        src='/Home/social-media/facebook-logo.png'
                        width={40}
                        height={40}
                        alt="Logo do Site"
                        className="w-10 h-10 rounded-xl"
                        />
                    </Link>
                    <Link href='/' className="">
                        <Image
                        src='/Home/social-media/twitter-logo.png'
                        width={40}
                        height={40}
                        alt="Logo do Site"
                        className="w-10 h-10 rounded-xl"
                        />
                    </Link>
                </div>
            </div>

        </div>
    )
}