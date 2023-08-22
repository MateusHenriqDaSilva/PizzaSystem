import Image from 'next/image'
import style from '../../styles/Login.module.css'
import loginImage from '../../../public/logo.png'
import Link from 'next/link'

// interface IUsuario{
//     nome: string
//     usuario: string
//     senha: string
// }

export default function Login() {
    return (
        <div className={style.espacoGlobal}>
            <div className={style.espacoLogin}>
               <Image alt="image" src={loginImage}  width={300} height={300}/>
                <input className={style.usuario} type="text" placeholder='Usuario' />
                <input className={style.password} type="password" placeholder='Senha'/>
                <Link href={'/painel'} passHref>
                    <button className={style.botao}>Entrar</button>
                </Link>
            </div>
        </div>
    )
}