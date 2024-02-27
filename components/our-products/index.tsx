import Link from "next/link";
import Title from "../title";
import OurProductsCards from "./cards";

export default function OurProducts() {
    return(
        <div className="w-full space-y-12">
            <div>
                <Title title="Nossos Produtos" subtitle="Explore a grande variedade de produtos das nossas lojas"/>   
                <div className="flex flex-wrap gap-4 justify-center my-10">
                    <OurProductsCards 
                    title="Pesos" 
                    description="Conjunto de halteres de 1 até 10 kg. Além de diversos outros pesos, barras e anilhas"
                    src="/Home/images/halteres.png" 
                    />
                    <OurProductsCards 
                    title="Suplementos" 
                    description="Uma grande variedade de suplementos para atender as mais variadas dietas e biotipos." 
                    src="/Home/images/suplementos.png" 
                    />
                    <OurProductsCards 
                    title="Equipamentos" 
                    description="Aqui na IRONPULSE você também encontra diversos outros itens para os vários tipos de atletas" 
                    src="/Home/images/objetos.png" 
                    />
                    <OurProductsCards 
                    title="Personal Trainer" 
                    description="Escolha o plano de personal trainer que melhor atenda sua rotina. Atendemos toda região Sul e Sudeste." 
                    src="/Home/images/personal.png" 
                    />
                </div>  
                <div className="flex justify-center items-center">
                    <Link href={'/produtos'}>
                        <button className="text-2xl text-white border-2 border-white py-3 px-8 bg-red-600 rounded-full hover:bg-white hover:text-black hover:border-black transition duration-300 ease-in-out">
                            Comprar
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}