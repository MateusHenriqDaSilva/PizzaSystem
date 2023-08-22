import estilo from '../../styles/Cabecalho.module.css'

interface propriedadesCabecalho {
    titulo: string
}

export default function Cabecalho(props: propriedadesCabecalho) {
    return (
        <div className={estilo.cabecalho}>
            <h1 className={estilo.titulo}>{props.titulo}</h1>
        </div>
    )
}