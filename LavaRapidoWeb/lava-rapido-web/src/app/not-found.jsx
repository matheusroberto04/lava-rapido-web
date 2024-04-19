import Link from "next/link";

export default function NotFound() {
  return ( 
    <main className="flex min-h-screen flex-col items-center">
      <h1>Ocorreu um erro!</h1>
      <p>Página não encontrada</p>
      <Link href="/">Voltando para pagina inicial</Link>
    </main>


  );
}
