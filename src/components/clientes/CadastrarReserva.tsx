import { useState, useEffect } from "react"
import style from '../../styles/CadastrarReserva.module.css'
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import Image from 'next/image'
import fundo1 from '../../styles/../../public/lugar.jpeg'
import DatePicker from "react-datepicker";
import fundo2 from '../../../public/fundo.jpeg'
import Cliente from '../../class/Clientes'
import "react-datepicker/dist/react-datepicker.css";
import Confetti from 'react-confetti'
import fundo3 from '../../../public/fundo3.jpeg'


export default function CadastrarReserva() {
    const [selecionado, setSelecionado] = useState(0)
    const [titular, setTitular] = useState('')
    //  contador is a state initialized to 0
    const [contador, setContador] = useState(0)
    const [startDate, setStartDate] = useState(new Date());
    const [checked, setChecked] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const handleButtonClick = () => {
        setShowModal(true);
    };

    new Cliente({ codigo: 1, titular: 'pedro', convidados: 10, kids: true })

    useEffect(() => {
        if (selecionado === 1) {
            if (titular && startDate && contador > 0) {
                setFormValid(true);
            } else {
                setFormValid(false);
                setShowWarning(true);
                setTimeout(() => setShowWarning(false), 5000);
            }
        } else {
            setFormValid(true);
        }
    }, [titular, startDate, contador, selecionado]);

    function proximo() {
        console.log(selecionado)
        if (selecionado < 2) {
            setSelecionado(selecionado + 1);
        }
        if (selecionado === 1) {
            if (titular && startDate && contador > 0) {
                setFormValid(true);
            } else {
                setFormValid(false);
                setShowWarning(true);
                setTimeout(() => setShowWarning(false), 5000);
            }
        } else {
            setFormValid(true);
        }
    }

    function voltar() {
        console.log(selecionado)
        if (selecionado > 0) {
            setSelecionado(selecionado - 1)
        }
    }

    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // contador state is incremented
        setContador(contador + 1)
    }

    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        setContador(contador - 1)
        if (contador < 1) {

        }
    }

    const isWeekday = (data: Date) => {
        const today = new Date();
        return data >= today;
    }

    return (
        <div className={style.espacoCliente}>
            <button className={style.seta1} onClick={voltar} disabled={selecionado === 0}>
                <SlArrowLeft color="#b08b8c" />
            </button>
            {selecionado == 0 ?
                <>
                    <div className={style.espacoFrases}>
                        <h1 className={style.frase}>AQUI VOCÊ VAI MERGULHAR NAS MAIS PROFUNDAS EXPERIÊNCIAS, DE SABORES E SENSAÇÕES. TUDO QUE VOCÊ PROCURA EM SABOR ENCONTRARÁ EM NOSSAS PIZZAS.</h1>
                    </div>
                    <div className={style.espacoImagem}>
                        <Image
                            src={fundo1}
                            alt="Bom Samaritano Lembrança"
                            quality="100"
                            layout="fill">
                        </Image>
                    </div>
                </>
                : false}
            {selecionado == 1 ?
                <>
                    <div className={style.espacoGlobal}>
                        <Image
                            src={fundo2}
                            alt="Bom Samaritano Lembrança"
                            quality="100"
                            fill
                        >
                        </Image>
                        <div className={style.formulario}>
                            <h1 className={style.cabecalho}>
                                Preencha os campos para prosseguir
                            </h1>
                            <h1 className={style.aviso}>PROMOÇÕES</h1>
                            <h1 className={style.subAviso}>- DOM: Crianças até 10 não pagam</h1>
                            <h1 className={style.subAviso}>- SEG: Bebida inclusa-R$64,90</h1>
                            <h1 className={style.subAviso}>- TER: Mulheres-R$49,90</h1>
                            <h1 className={style.subAviso}>- QUA/QUI: Casal/Dupla-R$99,90</h1>
                            <h1 className={style.subAviso}>- SEX/SÁB: R$59,90</h1>
                            <h1 className={style.subAviso}>- Crianças de 7 à 10 anos - Pagam meia</h1>
                            <h1 className={style.aviso}>Todos os dias, das 19h às 23h30 por apenas R$54,9</h1>
                            <input className={style.titular} type="text" placeholder='Titular da reserva' onChange={(event) => setTitular(event.target.value)} />
                            <div className={style.escolhaFilhos}>
                                <h1 className={style.subAvisoData}>Lugares para crianças?</h1>
                                <input className={style.selecao} type="checkbox" />
                            </div>
                            <div className={style.parte2}>
                                <h1 className={style.subAvisoData}>Quantidade de pessoas:</h1>
                            </div>
                            <div className={style.espacoContador}>
                                <button className={style.botaoAumentar} onClick={handleClick2} disabled={contador === 0}>-</button>
                                <div className={style.contagem}>{contador}</div>
                                <button className={style.botaoDiminuir} onClick={handleClick1}>+</button>
                            </div>
                            <h1 className={style.subAvisoData}>Seleciona a data:</h1>
                            <div className={style.espacoData}>
                                <DatePicker
                                    className={style.data}
                                    selected={startDate}
                                    onChange={(data) => data && setStartDate(data)}
                                    filterDate={isWeekday} dateFormat="dd/MM/yyyy" />
                            </div>
                            <h1 className={style.importante}>TODO DESCONTO É CEDIDO SOMENTE COM APRESENTAÇÃO DE DOCUMENTO COM FOTO</h1>
                        </div>
                    </div>
                </>
                : false}
            {selecionado == 2 ?
                <>
                    <div className={style.espacoGlobal}>
                        <Image
                            src={fundo3}
                            alt="Bom Samaritano Lembrança"
                            quality="100"
                            fill
                        >
                        </Image>
                        <div className={style.espacoConteudo}>
                            <h1 className={style.titulo}>política de reservas. Caso não cheguem até as 19h30 para acomodação, os lugares serão liberados para a fila de espera, caso tenha.</h1>
                            <h1 className={style.descricao}>- Toda cortesia e desconto será cedido apenas mediante comprovação de documento com foto. Ex: Aniversário, crianças etc.</h1>
                            <h1 className={style.descricao}>- Lembrando que pedimos que ao menos 50% da mesa esteja acomodada neste horário das 19h30. A partir das 20h, iremos movimentar a fila de espera com os lugares que sobram, caso a tenha.</h1>
                            <h1 className={style.descricao}>Nossas reservas estão esgotadas. Isso não significa que não poderão vir. Nós reservamos 55% da nossa capacidade, deixando os demais lugares livres para ocupação conforme chegada na casa. Abrimos a casa as 18h40. Quanto antes chegarem, mais chances de se acomodarem mais rapido ou até mesmo pegar livre na hora ainda.</h1>
                            <h1 className={style.titulo}>Nossa pizzaria tem uma política de avaliação geral sempre visando o melhor atendimento dos nossos clientes e através dela notamos a necessidade de não trabalhar com reservas aos sábados. Organize sua agenda e venha mais cedo para nossa casa... Estaremos prontos a sua espera.</h1>
                            <h1 className={style.titulo}>TODO DESCONTO É CEDIDO SOMENTE COM APRESENTAÇÃO DE DOCUMENTO COM FOTO PARA O ATENDENTE !!!</h1>
                            <div className={style.espacoCheckbox}>
                                <input className={style.checkbox} type="checkbox" checked={checked} onChange={handleCheckboxChange} />
                                <h1 className={style.descricao}>Eu aceito os termos de condição</h1>
                            </div>
                            <div className={style.espacoBotao}>
                                <button className={style.botao} onClick={handleButtonClick} disabled={!checked}>
                                    Confirmar
                                </button>
                            </div>
                        </div>
                        {showModal && (
                            <>
                                <Confetti />
                                <div className={style.modal}>
                                    <div className={style.modalContent}>
                                        <span className={style.close} onClick={() => setShowModal(false)}>×</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </>
                : false}
            <button className={style.seta2} onClick={proximo} disabled={!formValid}>
                <SlArrowRight color="#b08b8c" />
            </button>
        </div>
    )
}
