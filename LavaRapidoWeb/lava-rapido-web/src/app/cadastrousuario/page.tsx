import NavBar from "@/components/NavBar";
import { CategoriaItem } from "./CategoriaItem";
import { Button } from "@nextui-org/button";
import { Plus } from "lucide-react";
import { getCadastroUsuario } from "../actions/cadastrousuario/getCadastroUsuario";
import Link from "next/link";

interface Cadastrousuario{
  id: number,
  nome: string,
  email: string,
  senha: string
}

export default async function Cadastrousuario() {

  const cadastrousuario: Cadastrousuario[] = await getCadastroUsuario()

  return ( 
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="cadastrousuario" />

      <section className="flex flex-col gap-2 bg-slate-800 min-w-[600px] mt-4 p-2 rounded">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Usuarios cadastrados</h2>
          <Link href="/cadastrousuario/new">
            <Button color="primary" startContent={<Plus />}>nova categoria</Button>
          </Link>
        </div>
        
        {cadastrousuario.map(cadastrousuario =>
          <CategoriaItem categoria={cadastrousuario} />
        )}
        
      </section>



    </main>

    
  );
}
