import NavBar from "@/components/NavBar";
import { getCategorias } from "@/app/actions/cadastro/getCategorias";
import { Form } from "./Form";


export default async function AdicionandoAgendamento() {
    const cadastrousuario = await getCategorias()

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="agendamento" />

            <Form cadastrousuario={cadastrousuario} />
            
        </main>


    )
}