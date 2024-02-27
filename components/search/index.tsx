'use client'

import { SearchIcon } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type SearchProps = {
    count: number;
}

export default function Search({ count }: SearchProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState<string | ''>(searchParams.get('query') || '')

    const handleSearch = (query: string) => {
        if(!query) {
            return
        }

        const params = new URLSearchParams();
        params.set('query', query)
        router.replace(`/membros/?${params.toString()}`)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch(searchTerm)
    }

    useEffect(() => {
        setSearchTerm(searchParams.get('query') || '')
    }, [searchParams])

    return(
        <form onSubmit={handleSubmit} className="flex w-full lg:w-10/12" id="search" autoComplete="off">
            <div className="flex flex-col w-full gap-2 mt-10">
                <div className="relative flex items-center w-full">
                    <SearchIcon className="w-7 h-7 absolute text-black/50 left-4" />
                    <input 
                        id="search-input"
                        name="search-input-name"
                        type="text"
                        className="w-full rounded-full px-16 py-4 text-black border border-black/50 transition-all duration-300 shadow-md"
                        placeholder="Procurar Membros"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                    <span>Total de <span className="text-red-600">{count}</span> membro(s) encontrado(s)</span>
            </div>

        </form>
    )
}