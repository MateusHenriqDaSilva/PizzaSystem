import estilo from '../../styles/Conteudo.module.css'
import Cabecalho from './Cabecalho'
import Menu from './Menu'

interface IConteudo {
    children?: any
    titulo: string
}

export default function Conteudo(props: IConteudo) {
    return (
        <div className={estilo.conteudoCabecalho}>
            <Menu />
            <div className={estilo.conteudoPrincipal}>
                <Cabecalho titulo={props.titulo} />
                {props.children}
            </div>
        </div>
    )
}