"use server"
export async function getById(id: number) {
    const response = await fetch(`http://localhost:8080/cadastrousuario/${id}`)

    if (!response.ok) {
        throw new Error('Categoria não encontrada')
    }

    return await response.json()
}