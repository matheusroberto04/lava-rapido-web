import { getById } from "@/app/actions/cadastrousuario/getById";
import NavBar from "@/components/NavBar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "./EditForm";

export default async function EditarCadastro({params}: Params) {
    const {id} = params
    const cadastrousuario = await getById(id)

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="cadastrousuario" />

            <EditForm {...cadastrousuario} />
            
        </main>
    )
}