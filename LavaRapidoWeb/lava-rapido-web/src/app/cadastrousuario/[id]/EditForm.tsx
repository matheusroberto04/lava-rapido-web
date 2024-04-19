"use client"

import { update } from "@/app/actions/cadastrousuario/update";
import { icones } from "@/app/utils/Icones";
import { Icone } from "@/components/Icone";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";

const initialState = {
    message: '',
}


export function EditForm(cadastrousuario:CadastroUsuario) {
    const [state, formAction] = useFormState(update, initialState)

    return (
        <form action={formAction} className="flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]">
            <h2 className="text-2xl font-bold">Editar cadastro {cadastrousuario.nome}</h2>
            <input type="hidden" name="id" value={cadastrousuario.id} />
            <Input
                key="nome"
                label="Nome"
                name="nome"
                defaultValue={cadastrousuario.nome}
                variant="bordered"
                labelPlacement={"outside"}
                isInvalid={state?.message != ''}
                errorMessage={state?.message}
            />

            <Autocomplete
                defaultItems={icones}
                label="Ícone"
                name="icone"
                variant="bordered"
                defaultInputValue={cadastrousuario.icone}
                labelPlacement={"outside"}
                placeholder="procurar ícone"
            >
                {(icone) => <AutocompleteItem key={icone.nome} startContent={<Icone nome={icone.nome} />}>{icone.nome}</AutocompleteItem>}
            </Autocomplete>

            <div className="flex justify-around mt-4">
                <Link href="/cadastrousuario">
                    <Button variant="bordered" >Cancelar</Button>
                </Link>
                <SubmitButton></SubmitButton>
            </div>
        </form>
    )
}