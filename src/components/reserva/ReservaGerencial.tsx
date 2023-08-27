import style from '../../styles/ReservaGerencial.module.css'
import Cabecalho from '../templateDaPagina/Cabecalho'
import Menu from '../templateDaPagina/Menu'

interface IConteudo {
    titulo: string
}

export default function ReservaGerencial(props: IConteudo) {
    return (
        <div className={style.conteudoCabecalho}>
            <Menu />
            <div className={style.conteudoPrincipal}>
                <Cabecalho titulo={props.titulo} />
                <div className={style.espacoFora}>
                <div className={style.espacoReserva}>
                    <div className={style.cadastroReserva}>
                        
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
