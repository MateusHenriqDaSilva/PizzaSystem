import Login from "@/components/TelaDeLogin/Login";

const unidade= [
  {
    id: 1,
    unidade: "Bauru"
  },
  {
    id: 2,
    unidade: "Ribeirao"
  },
]

const usuario = [
  {
    nome: 'natali',
    usuario: 'natali',
    senha: 'natali',
    unidade: 'unidade 1'
  }
]

export default function Home() {
  return (
    <>
        <Login />
    </>
  )
}