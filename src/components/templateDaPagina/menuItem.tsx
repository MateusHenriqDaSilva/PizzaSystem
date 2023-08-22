import Link from 'next/link'
import estilo from '../../styles/MenuItem.module.css'

interface IMenuItem {
    titulo: string
    caminho: string
    icone: any
}

export default function MenuItem(props: IMenuItem) {
    return (
        <Link href={props.caminho} passHref>
            <div className={estilo.icone}>
                {props.icone}
                <span className={estilo.titulo}>{props.titulo}</span>
            </div>
        </Link>
    )
}