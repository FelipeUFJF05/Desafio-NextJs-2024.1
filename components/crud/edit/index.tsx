import { editMember } from "@/actions/admin/categorias/actions"
import { Membro } from "@prisma/client"
import Link from "next/link"

export default function EditCategory({category}: {category: Membro | null}) {

    const updateMemberWithID = editMember.bind(null, category?.id)

    return(
        <div className="w-full flex items-center justify-center">
            <form className="flex flex-col gap-4" autoComplete="off" action={updateMemberWithID}>
                <div className="flex flex-col gap-1 space-y-5">
                    <label className="flex items-center justify-center text-2xl font-semibold">Nome do Membro</label>
                    <input 
                    className="border-2 py-2 px-6 rounded-md mb-5"
                    name="name"
                    placeholder="Nome"
                    defaultValue={category?.name}
                    />
                    <label className="flex items-center justify-center text-2xl font-semibold">Cargo do Membro</label>
                    <input 
                    className="border-2 py-2 px-6 rounded-md mb-5"
                    name="cargo"
                    placeholder="Cargo"
                    defaultValue={category?.cargo}
                    />
                    <label className="flex items-center justify-center text-2xl font-semibold">Email do Membro</label>
                    <input 
                    className="border-2 py-2 px-6 rounded-md mb-5"
                    name="email"
                    placeholder="Email"
                    defaultValue={category?.email}
                    />
                </div>
                <div className="w-full flex flex-col col-2 justify-center items-center">
                    <button className="text-xl text-white py-2 px-6 bg-green-600 rounded-full hover:bg-white hover:text-black hover:border-black hover:border-2 transition duration-300 ease-in-out mb-4 mt-5">
                        Salvar
                    </button>
                    <Link href={"/admin"}>
                        <button className="text-xl text-white py-2 px-6 bg-red-600 rounded-full hover:bg-white hover:text-black hover:border-black hover:border-2 transition duration-300 ease-in-out mb-4 ">
                            Voltar
                        </button>
                    </Link>

                </div>

            </form>

        </div>
    )
}