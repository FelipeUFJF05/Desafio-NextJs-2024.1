import MembersTable from "../table";
import Search from "../search";
import { fetchCategories, fetchMembers } from "@/actions/admin/categorias/actions";
import { Membro } from "@prisma/client";
import Pagination from "../pagination";

export default async function Members({members, count, totalPages}: {members: Membro[], count: number, totalPages: number}) {
    return(
        <div className="w-full">
            <div className="flex fle justify-center items-center">
                <Search count={count} />
            </div>
            
            {count ==  0 ? (
                <div className="w-full flex flex-col justify-center items-center mt-12">
                    <span className="text-2xl font-bold mt=12"> Nenhum membro encontrado. </span>
                </div>
            ): (
                <div className="w-full flex flex-col gap-12 my-12">
                    <MembersTable members={members} />   
                    {totalPages > 1 && (
                        <Pagination totalPages={totalPages} />
                    )}
                </div>
            )}

        </div>
    )
}