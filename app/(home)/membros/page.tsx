import { fetchCategories } from "@/actions/admin/categorias/actions";
import { fetchFilteredMember } from "@/actions/search/actions";
import Members from "@/components/members";

export default async function MembersPage({
    searchParams,
}: {
    searchParams: {
        query?: string;
        page?: string;
    }
}) {

    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    const {members, count, totalPages} = await fetchFilteredMember(query, currentPage)

    return(
        <div className="space-y-24 md:space-y-32 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto">
            <Members members={members} count={count} totalPages={totalPages}/>
        </div>
    )
}