import { fetchMemberById } from "@/actions/admin/categorias/actions";
import EditCategory from "@/components/crud/edit";

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
                    <h1 className="text-4xl font-bold mt-4 mb-4 text-center">Editar um Membro</h1>
                    <p className="text-xl font-semibold text-center">Edite as informações de um membro da <span className="text-red-800">IRONPULSE</span> por aqui!</p>
                </div>
                    <EditCategory category={category} />
            </div>
        </div>
    )
}