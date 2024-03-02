import ProductsCards from "@/components/products-cards";

export default function ProductsPage() {
    return(
        <div className="w-full min-h-screen px-12 flex flex-col items-center justify-center">
            <div className="flex justify-center flex-col col-2 items-center space-y-5 mt-12 mb-16">
                <h1 className="text-red-700 text-3xl text-center font-extrabold uppercase">Nossos Produtos</h1>
                <h3 className="text-gray-600 text-xl font-semibold text-center">Confira os produtos que nossos clientes adoram!</h3>
            </div>

            <div className="w-full mb-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                <ProductsCards name="Straps" description="Um conjunto de straps que auxiliam na fixação do pulso ao peso que está segurando." image='/Products/straps.jpg' price="40.00" type="Equipamento" />

                <ProductsCards name="Luvas e Joelheiras" description="Um conjunto de luvas e joelheiras de alta tecnologia dry-fit, que irão te auxiliar a não sentir mais dor ou desconforto durante os treinos" image='/Products/luva e joelheira.jpg' price="120.00" type="Equipamento" />

                <ProductsCards name="Bolas e Staps infláveis" description="Escolha dentro diversos tipos e tamanhos de bolas de ginástica e steps infláveis para garantir o melhor alogamento e controle possível." image='/Products/bolas de ginastica.jpg' price="180.00" type="Equipamento" />

                <ProductsCards name="Barra e Anilhas" description="Barras de 10, 15 ou 20 kg, junto com conjunto de anilhas de 2.5 kg até 25 kg." image='/Products/barra e anilhas.jpg' price="400.00" type="Peso" />

                <ProductsCards name="Pesos" description="Conjunto de pesos para agachamento que vão de 1 até 20 kg. Ou então opte por escolher um peso personalizado!" image='/Products/pesos.jpg' price="250.00 conjunto" type="Peso" />

                <ProductsCards name="Halteres" description="Escolha um conjunto de halteres de 1 até 10 kg ou então escolha seus pesos de forma personalizada." image='/Products/halteres.jpg' price="200.00 conjunto"  type="Peso" />

                <ProductsCards name="Suplementos" description="Conte com o melhor Whey Protein, Pré-treino, Creatina, Barrinhas e Hipercalóricos do mercado, com os produtos IRONPULSE!" image='/Products/suplementos.jpg' price="Preço Individual"  type="Suplemento" />

                <ProductsCards name="Vitaminas" description="Encontre as vitaminas que o seu corpo precisa para impulsionar sua dieta e torná-la mais leve!" image='/Products/vitaminas.jpg' price="Preço Individual"  type="Suplemento" />

                <ProductsCards name="Planos Personal Trainer" description="Escolha o plano que melhor te atenda com profissionais altamente qualificados que irão te auxiliar e prover uma melhora no seu desempenho! Atendemos em toda região Sul e Sudeste do Brasil." image='/Products/personal.jpg' price="Consultar Planos"  type="Serviço" />
            </div>
        </div>
    )
}
