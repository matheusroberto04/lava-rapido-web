'use server'

export async function getCategorias() {
    const resp = await fetch(process.env.API_BASE_URL + "/cadastrousuario", { next: { revalidate: 0 } })
    return await resp.json()
}