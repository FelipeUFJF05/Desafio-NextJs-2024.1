import CreateCategory from "@/components/crud/create";
import Image from "next/image";

export default function Page() {
    return(
        <div className="w-full space-y-12 min-h-screen bg-white md:bg-white lg:bg-background-leao xl:bg-background-leao">
            <div className="flex flex-col justify-center items-center mt-10">
                <h1 className="text-4xl font-bold mt-4 mb-4 text-center">Adicionar um novo membro</h1>
                <p className="text-xl font-semibold text-center">Crie um novo membro para a equipe <span className="text-red-800">IRONPULSE</span> por aqui!</p>
            </div>
            <CreateCategory />
        </div>
    )
}