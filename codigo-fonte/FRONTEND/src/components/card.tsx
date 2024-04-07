

type cardProps = {
    name: string,
    id: number
}

export function Card(props: cardProps) {

    return (
    <div className="flex w-full h-20 border-gray-200 border-opacity-90 bg-input rounded-lg">
        <img 
            src="https://observatoriodosfamosos.uol.com.br/portal/wp-content/uploads/2023/08/manoel-gomes-70-mil-transformacao.jpg" 
            alt="foto" 
            className="w-1/4 h-14 m-3 rounded-lg "
        />
        <span className="flex flex-col gap-2">
            <h2 className="font-medium ml-1 pt-4 text-base text-primary">
                {props.name}
            </h2>
            <h3 className="font-medium ml-1 text-xs">
                Última consulta 22/12/2023
            </h3>

        </span>
    </div>
    )
}
