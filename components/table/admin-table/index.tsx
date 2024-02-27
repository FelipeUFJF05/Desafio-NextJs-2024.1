'use client'

import { Eye, PencilLine, Trash2 } from "lucide-react";
import Link from "next/link";
import { DeleteButton, EditButton, ViewButton } from "./buttons";
import { Membro } from "@prisma/client";
import { useState } from "react";

export default function AdminTable({categories, count}: {categories: Membro[], count: number}) {
 
    return (
        <div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:rounded-lg rounded-lg">
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
                            <th scope="col" className="px-6 py-3">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr key={index} className="bg-gray-100 corder-b hover:bg-gray-200">
                                <th className="px-6 py-6 font-medium">
                                    {category?.name}
                                </th>
                                <th className="px-6 py-6 font-medium">
                                    {category?.cargo}
                                </th>
                                <th className="px-6 py-6 font-medium">
                                    {category?.email}
                                </th>
                                <th className="pb-3" >
                                    <EditButton id={category?.id} />
                                    <ViewButton id={category?.id} />
                                    <DeleteButton id={category?.id} />
                                </th>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
