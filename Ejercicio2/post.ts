import { rl } from "./readline"
import { PostThing } from "./publicacion";
// clase para imagen, texto, video 



export async function publicaralgo() {
    let condition = true
    do {
        try {
            const opcion = Number(await rl.question("Que desea publicar? \n 1. Documento de texto. \n 2. Imagen \n 3. Video. \n Opcion: "))
            if (opcion > 3) {
                console.log(`Seleccione una opcion valida`)
            } else {
                switch (opcion) {
                    case 1://Doc texto

                        let titulo = await rl.question(`Escriba el Titulo que desea publicar: `)
                        const pub1 = new PostThing(titulo, 1)
                        console.log(`${pub1.postContent}`)// arreglar esto
                        break;
                    case 2://imagen
                        let titulo1 = await rl.question(`Escriba el Titulo que desea publicar: `)

                        const pub2 = new PostThing(titulo1, 2)
                        break;
                    case 3://video
                        const titulo2 = await rl.question(`Escriba el Titulo que desea publicar: `)

                        const pub3 = new PostThing(titulo2, 3)
                        break;

                    default:
                        rl.close()
                        break;
                }
            }

        } catch (error) {
            console.error(error)
        } finally {

        }

    } while (condition);
}




