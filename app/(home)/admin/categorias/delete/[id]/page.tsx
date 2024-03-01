import { fetchMemberById } from "@/actions/admin/categorias/actions";
import DeleteCategory from "@/components/crud/delete";
import { AlertTriangle } from "lucide-react";

export default async function Page(
    {params} : 
    {
        params: {id: string}
    }
) {
    const id = parseInt(params.id, 10)
    const category = await fetchMemberById(id)
    
    return(
        <div>
            <div className="w-full space-y-12 min-h-screen bg-white md:bg-white lg:bg-background-leao xl:bg-background-leao">
                <div className="flex flex-col justify-center items-center mt-10">
                    <h1 className="text-4xl font-bold mt-4 mb-4 text-center">Excluir Membro</h1>
                    <p className="text-2xl font-semibold text-center">Você tem certeza?</p>
                    <div className="flex items-center justify-center gap-6 mt-6">
                        <AlertTriangle className="w-10 h-10 text-red-600" />
                        <p className="text-2xl font-bold text-center text-red-600">Excluir um membro é uma ação permanente e irreversível!</p>
                        <AlertTriangle className="w-10 h-10 text-red-600" />
                    </div>
                </div>
                    <DeleteCategory id={id} category={category} />
            </div>
        </div>
    )
}