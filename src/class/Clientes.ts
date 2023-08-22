interface reserva {
    codigo: number
    titular: string
    convidados: number
    kids: boolean
}

export default class Clientes {
    codigo: number
    titular: string
    convidados: number
    kids: boolean
    // listaReserva: [] = []

    constructor(argumentos: reserva) {
        this.codigo = argumentos.codigo
        this.titular = argumentos.titular
        this.convidados = argumentos.convidados
        this.kids = argumentos.kids
    }

    // criarLista(argumentos: reserva){
    //     this.listaReserva.push(argumentos.codigo)
    //     this.listaReserva.push(argumentos.nome)
    //     this.listaReserva.push(argumentos.convidados)
    //     return this.listaReserva
    // }
}