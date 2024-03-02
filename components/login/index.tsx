import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return(
        <section className="bg-background-login min-h-screen flex items-center justify-center">
            <div className="bg-gradient-to-b from-red-800 to-red-950 shadow-lg rounded-2xl w-3/4 md:w-1/3 text-center items-center justify-center flex flex-col">
                    <Image
                    src='/Home/logos/logo.png'
                    alt="Logo da IRONPULSE" 
                    width={600}
                    height={600}
                    className="w-32 h-32 mt-5"
                    />
                <p className="text-white text-2xl px-2">Faça login com sua conta</p>
                <p className="text-white text-3xl font-bold pb-8">IRONPULSE</p>

                <form className="flex flex-col w-3/4" autoComplete="off" action={"/admin"}>
                    <input type="email" placeholder="Email" className="my-6 rounded-lg pl-2 py-1 italic font-semibold" required/>
                    <input type="password" placeholder="Senha" className="rounded-lg pl-2 py-1 italic font-semibold" required/>
                    <Link href='/admin'>
                        <button className="text-2xl text-black border-2 border-black py-2 px-8 bg-white rounded-full hover:bg-red-950 hover:text-white hover:border-white transition duration-300 ease-in-out my-10">
                            Login
                        </button>
                    </Link>
                </form>

            </div>
        </section>
    )
}