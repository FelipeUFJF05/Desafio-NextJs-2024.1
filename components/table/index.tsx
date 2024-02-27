import { Membro } from "@prisma/client";

export default function MembersTable({members}: {members: Membro[]}) {
    return(
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-base text-left">
                <thead className="uppercase bg-red-950 text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nome
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Cargo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                    </tr>
                </thead>
                {members.map((members, index) => (
                    <tbody key={index}>
                        <tr className="bg-gray-100 corder-b hover:bg-gray-200">
                            <th className="px-6 py-6 font-medium">
                                {members?.name}
                            </th>
                            <th className="px-6 py-6 font-medium">
                                {members?.cargo}
                            </th>
                            <th className="px-6 py-6 font-medium">
                                {members?.email}
                            </th>
                        </tr>
                    </tbody>
                ))}

            </table>

        </div>
    )
}