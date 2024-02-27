'use client'

import { deleteMember } from "@/actions/admin/categorias/actions"
import { Eye, PencilLine, Trash2 } from "lucide-react"
import Link from "next/link"

export function EditButton({id}: {id:number | undefined}) {
    return(
        <Link href={`/admin/categorias/edit/${id}`}>
            <button className="bg-yellow-400 rounded-xl py-2 px-2 mr-3 hover:bg-yellow-500">
                <PencilLine />
            </button>
        </Link>
    )
}

export function ViewButton({id}: {id:number | undefined}) {
    return(
        <Link href={`/admin/categorias/view/${id}`}>
            <button className="bg-sky-300 rounded-xl py-2 px-2 mr-3 hover:bg-sky-400">
                <Eye />
            </button>
        </Link>
    )
}

export function DeleteButton({id}: {id:number | undefined}) {
    return(
        <Link href={`/admin/categorias/delete/${id}`}>
            <button className="bg-red-500 rounded-xl py-2 px-2 hover:bg-red-600">
                <Trash2 />
            </button>
        </Link>
    )
}

