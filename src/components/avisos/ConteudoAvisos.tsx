import kitImagem from '../../../public/kit.png'

type IDadosCartao = {
    id: number,
    nome: string,
    categoria: string,
    imagem: any,
    passos: Array<Array<string>>
}

export const dadosCartao: IDadosCartao[] = [
    {
        id: 1,
        nome: 'Saber se o produto pertence a algum kit',
        categoria: 'kit',
        imagem: kitImagem,
        passos: [
            ['Navegue ate produtos'],
            ['Pesquise pelo nome do produto'],
            ['clique com o direito sobre o produto'],
            ['Visualizar presenca e composicoes']
        ]
    }
]