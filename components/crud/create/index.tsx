import { createMember } from "@/actions/admin/categorias/actions";
import Link from "next/link";

export default function CreateCategory() {
    return(
        <div className="w-full flex items-center justify-center">
            <form className="flex flex-col gap-4" autoComplete="off" action={createMember}>
                <div className="flex flex-col gap-1 space-y-5">
                    <label className="flex items-center justify-center text-2xl font-semibold">Nome do Membro</label>
                    <input 
                    className="border-2 py-2 px-6 rounded-md mb-5"
                    name="name"
                    placeholder="Nome"
                    /> 
                    <label className="flex items-center justify-center text-2xl font-semibold">Cargo do Membro</label>
                    <input 
                    className="border-2 py-2 px-6 rounded-md mb-5"
                    name="cargo"
                    placeholder="Cargo"
                    />
                    <label className="flex items-center justify-center text-2xl font-semibold">Email do Membro</label>
                    <input 
                    className="border-2 py-2 px-6 rounded-md mb-5"
                    type="email"
                    name="email"
                    placeholder="Email"
                    />
                </div>
                <div className="w-full flex flex-col col-2 justify-center items-center">
                    <button className="text-xl text-white py-2 px-6 bg-green-600 rounded-full hover:bg-white hover:text-black hover:border-black hover:border-2 transition duration-300 ease-in-out mb-4 mt-5">
                        Criar Membro
                    </button>
                    <Link href={"/admin"}>
                        <button className="text-xl text-white py-2 px-6 bg-red-600 rounded-full hover:bg-white hover:text-black hover:border-black hover:border-2 transition duration-300 ease-in-out mb-4 ">
                            Voltar
                        </button>
                    </Link>
                    <p id="error" className="text-red-600 text-2xl font-semibold hidden">Já existe um membro com o mesmo nome ou email.</p>
                </div>

            </form>

        </div>
    )
}