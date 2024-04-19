"use client"

import DropDownActions from "@/components/DropDownActions";
import { Icone } from "@/components/Icone";
import { create } from "domain";
import { toast } from "react-hot-toast";
import { destroy } from "../actions/cadastrousuario/destroy";
import { useRouter } from "next/navigation";
import CadastrarUsuario from "./new/page";

interface CadastroItemProps {
    cadastrousuario: CadastroUsuario
}

export function CategoriaItem({ cadastrousuario}: CadastroItemProps) {
    const router = useRouter()

    function handleDelete() {
        toast.promise(
            destroy(CadastrarUsuario.id),
            {
                loading: "Apagando...",
                success: "Deletado com sucesso",
                error: "Erro ao apagar",
            }
        );
    }

    return (
        <div className="flex justify-between p-2">
            <div className="flex gap-2 items-center">
                <Icone nome={cadastrousuario.icone} />
                <span>{cadastrousuario.nome}</span>
            </div>
            <DropDownActions
                onEdit={ () => router.push(`/cadastrousuario/${cadastrousuario.id}`) }
                onDelete={handleDelete}
            />
        </div>
    )
}