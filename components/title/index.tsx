type TitleProps = {
    title: string;
    subtitle: string;
}

export default function Title({title, subtitle}: TitleProps) {
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold leading-relaxed text-center mb-4">
                {title}
            </h1>
            <span className="text-xl xl:text-xl 2xl:text-3xl 3xl:text-4xl uppercase leading-relaxed text-center">
                {subtitle}
            </span>

        </div>
    )
}