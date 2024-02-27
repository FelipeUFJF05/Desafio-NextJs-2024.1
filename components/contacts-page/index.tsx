import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Contacts() {
    return (
        <div className="bg-background-login w-full flex items-center justify-center min-h-screen">
            <div className="max-w-4xl mx-auto my-10">
                <div className="bg-gray-100 flex rounded-2xl shadow-lg p-5 border-4 border-red-950 w-full">
                    <div className="md:w-full px-16"> 
                        <h1 className="text-3xl font-semibold mt-4 mb-5 text-center md:text-start lg:text-start">Entre em Contato!</h1>
                        <p className="text-lg mb-7 text-center md:text-justify lg:text-justify">Caso tenha alguma dúvida ou sugestão, não hesite em entrar em contato com nossa equipe, ou então, preencha o formulário abaixo e entraremos em contato.</p>

                        <form autoComplete="off">
                            <h2 className="text-xl">Nome</h2>
                            <input 
                                type="text"
                                name="Nome"
                                className="h-10 pl-2 mb-5 w-full"
                                required
                            />
                            <h2 className="text-xl">Email</h2>
                            <input 
                                type="text"
                                name="Email"
                                className="h-10 pl-2 mb-5 w-full"
                                required
                            />
                            <h2 className="text-xl">Assunto</h2>
                            <textarea placeholder="Mensagem" rows={5} className="p-4 mb-3 w-full" resize-none />
                            <button className="text-xl text-white border-2 border-black py-2 px-6 bg-red-950 rounded-full hover:bg-white hover:text-black hover:border-black transition duration-300 ease-in-out mb-7">Enviar</button>
                        </form>
                            <h1 className="font-bold text-lg pr-5">Telefone de Contato: (32)98865-3680</h1>
                            <h1 className="font-bold text-lg">Endereço: Universidade Federal de Juiz de Fora</h1>
                            <div className="flex flex-wrap space-x-4 mt-3">
                                <Link href='https://www.instagram.com/codejr/' className="">
                                    <Instagram className="w-10 h-10" />
                                </Link>
                                    <Link href='https://www.instagram.com/codejr/' className="">
                                    <Facebook className="w-10 h-10" />
                                </Link>
                                <Link href='https://www.instagram.com/codejr/' className="">
                                    <Twitter className="w-10 h-10" />
                                </Link>
                            </div>
                    </div>

                    <div className="hidden md:block w-full">
                        <Image 
                            src='/Home/images/leao-perfil2.png'
                            alt="Perfil de um leão"
                            width={500}
                            height={500}
                            className="overflow-hidden w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
