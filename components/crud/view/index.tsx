import { editMember } from "@/actions/admin/categorias/actions"
import { Membro } from "@prisma/client"
import Link from "next/link"

export default function ViewCategory({category}: {category: Membro | null}) {

    const updateMemberWithID = editMember.bind(null, category?.id)

    return(
        <div className="w-full flex items-center justify-center">
            <form className="flex flex-col gap-4" autoComplete="off" action={updateMemberWithID}>
                <div className="flex flex-col gap-1 space-y-5">
                    <h1 className="flex items-center justify-center text-2xl font-semibold">Nome do Membro:</h1>
                    <div className="bg-gray-100 border-2 border-gray-400 py-3 px-4">
                        <label className="flex items-center justify-center text-xl">{category?.name}</label>
                    </div>
                    <h1 className="flex items-center justify-center text-2xl font-semibold">Cargo do Membro:</h1>
                    <div className="bg-gray-100 border-2 border-gray-400 py-3 px-4">
                        <label className="flex items-center justify-center text-xl">{category?.cargo}</label>
                    </div>
                    <h1 className="flex items-center justify-center text-2xl font-semibold">Email do Membro:</h1>
                    <div className="bg-gray-100 border-2 border-gray-400 py-3 px-4">
                        <label className="flex items-center justify-center text-xl">{category?.email}</label>
                    </div>
                </div>
                <div className="w-full flex flex-col col-2 justify-center items-center">

                    <Link href={"/admin"}>
                        <button className="text-xl text-white py-2 px-6 bg-red-600 rounded-full hover:bg-white hover:text-black hover:border-black hover:border-2 transition duration-300 ease-in-out mb-4 mt-4">
                            Voltar
                        </button>
                    </Link>

                </div>

            </form>

        </div>
    )
}