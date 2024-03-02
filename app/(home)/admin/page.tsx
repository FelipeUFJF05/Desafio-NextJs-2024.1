import { fetchCategories } from "@/actions/admin/categorias/actions";
import AdminTable from "@/components/table/admin-table";
import Link from "next/link";

export default async function AdminPage() {
    const {categories, count} = await fetchCategories()

    return(
        <div className="w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto my-14">
            <div className="w-full p-4 py-6 border-2 rounded-3xl flex flex-col gap-4 bg-red-950 mb-10">
                <div className="flex items-center w-full justify-between">
                    <h1 className="text-xl md:text-2xl pl-2 md:pl-6 lg:pl-8 text-white">Criar novo membro</h1>
                    <Link href={'/admin/categorias/create'}>
                        <button className="text-2xl py-2 px-4 md:w-48 md:mx-6 border-2 border-black rounded-xl text-black bg-white transition-all hover:bg-red-950 hover:text-white font-semibold hover:border-white">
                            Adicionar
                        </button>
                    </Link>
                </div>
            </div>
            <div>
                <AdminTable categories={categories} count={count} />
            </div>
        </div>
    )
}