import Image from "next/image";

type OurProductsCardsProps = {
    title: string;
    description: string;
    src: string;
}

export default function OurProductsCards({title, description, src}: OurProductsCardsProps) {
    return(
        <div className="flex flex-col items-center justify-center gap-8 max-w-sm 2xl:max-w-md 3xl:max-w-lg p-8 transition-shadow duration-200 rounded-md hover:shadow-2xl cursor-pointer border-2 border-red-50">
            <Image 
                src={src}
                alt={title}
                width={120}
                height={120}
                className="max-h-[120px] max-w-[120px] xl:max-h-[220px] xl:max-w-[220px] 2xl:max-h-[320px] 2xl:max-w-[320px]"
            />
            <h1 className="text-center text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-red-600 font-semibold">{title}</h1>
            <p className="text-gray-700 text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-center line-clamp-6">{description}</p>

        </div>
    )
}