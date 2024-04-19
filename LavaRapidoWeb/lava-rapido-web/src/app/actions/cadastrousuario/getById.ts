'use server'

export async function getById(id:number) {
    const resp = await fetch(`${process.env.API_BASE_URL}/cadastrousuario/${id}`, {next: {revalidate: 0} })

    if(!resp.ok){
        throw new Error("Cadastro nao encontrado!")
    }
    return await resp.json()
}