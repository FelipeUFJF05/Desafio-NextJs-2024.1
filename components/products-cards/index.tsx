type CardProps = {
    name: string;
    description: string;
    price: string;
    image: string;
    type: string;
}

import { CircleDollarSign, Dumbbell, Wallet } from "lucide-react";
import Image from "next/image";

export default function ProductsCards({name, description, price, image, type}: CardProps) {
    return(
        <div className="group">
            <div className="flex group-hover:shadow-2xl rounded-xl duration-300">
                <div className="flex w-full flex-col rounded-xl shadow-lg cursor-pointer">
                    <div className="overflow-hidden rounded-t-xl text-gray-700">
                        <Image
                            src={image}
                            alt="Imagem de Straps"
                            width={600}
                            height={600}
                            className="w-full object-cover"
                        />
                    </div>
                    <div className="p-6 flex flex-col gap-4 justify-between">
                        <h1 className="text-xl 2xl:text-2xl 3xl:text-3xl font-semibold text-black line-clamp-2">
                            {name}
                        </h1>
                        <h1 className="text-lg text-gray-700 line-clamp-2">
                            {description}
                        </h1>
                        <div className="flex justify-between gap-4 items-center">
                            <div className="flex gap-2 items-center text-lg font-bold text-green-600">
                                <Wallet className="h-7 w-7" />
                                <span className="text-lg 2xl:text-xl 3xl:text-2xl"> R$ {price}</span>
                            </div>

                            <div className="flex gap-2 items-center text-lg font-bold text-red-600">
                                <Dumbbell className="w-7 h-7" />
                                <span className="text-lg">{type}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}