"use client"

import DropDownActions from "@/components/DropDownActions";
import { Icone } from "@/components/Icone";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { destroy } from "../actions/movimentacoes/destroy";
import { ArrowDown, ArrowUp } from "lucide-react";


interface AgendamentoItemProps{
    agendamento : Agendamento
}

export function AgendamentoItem({ agendamento }: AgendamentoItemProps){
    const router = useRouter()

    function handleDelete(){
        toast.promise(
            destroy(agendamento.id),
             {
               loading: "Deletando...",
               success: "Excluido com sucesso",
               error: "Erro ao excluir",
             }
           );

    }

    return (
        <div className="flex justify-between p-2 hover:bg-slate-600 rounded cursor-pointer">
            <div className="flex gap-2 items-center">
                <Icone nome={agendamento.cadastrousuario.icone} />
                <span>{agendamento.data}</span>
                <span>{agendamento.descricao}</span>
            </div>
            <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center">
                    R$ {agendamento.valor.toFixed(2)}
                    {agendamento.tipo === "ENTRADA" ? 
                        <ArrowDown className="text-green-500" size={18} /> : 
                        <ArrowUp className="text-red-500" size={18} />
                    }
                </div>
                <DropDownActions 
                    onDelete={handleDelete} 
                    onEdit={() => toast("Não implementado")} 
                />
            </div>
        </div>
    )
}