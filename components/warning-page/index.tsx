import { AlertCircle, AlertTriangle, UserRoundX } from "lucide-react"
import Link from "next/link"

export default function WarningPage() {
    return(
        <div className="w-full flex flex-col cols-3 items-center justify-center">
            <div className="mt-10 flex flex-col justify-center items-center">
                <UserRoundX className="w-20 h-20" />
                <div className="flex items-center justify-center gap-6">
                    <AlertCircle className="w-10 h-10 text-red-600" />
                    <h1 className="text-4xl font-bold mt-4 mb-4 text-center">Não foi possível criar o membro</h1>
                    <AlertCircle className="w-10 h-10 text-red-600" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-5">
                <h1 className="text-3xl font-bold mt-4 mb-4 text-center">Um membro com o mesmo nome ou senha já existe!</h1>
                <p className="text-2xl font-semibold text-center mb-4">Verifique e tente novamente.</p>
                <div className="flex items-center justify-center gap-6 mt-6">
                    <p className="text-2xl font-bold text-center text-red-600">Não é possível de se ter dois membros com o mesmo nome e/ou email registrados!</p>
                </div>
            </div>
            <div className="mt-5">
                <Link href={"/admin"}>
                    <button className="text-xl text-white py-2 px-6 bg-red-600 rounded-full hover:bg-white hover:text-black hover:border-black hover:border-2 transition duration-300 ease-in-out mb-4 mt-4">
                        Voltar
                    </button>
                </Link>
            </div>
        </div>
    )
}