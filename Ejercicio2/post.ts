import { rl } from "./readline"
import { PostImage } from "./publicacion";
import { PostText } from "./publicacion";
import { PostVideo } from "./publicacion";
import { Menu } from "./main";
// clase para imagen, texto, video 



export async function publicaralgo() {

    const opcion = Number(await rl.question("Que desea publicar? \n 1. Documento de texto. \n 2. Imagen \n 3. Video. \n 4. Regresar \n Opcion: "))
    if (opcion == 1) {
        let type = `Documento de texto`
    } else if (opcion == 2) {
        let type = `Imagen`
    } else if (opcion == 3) {
        let type = `Video`
    } else if (opcion == 4){
        console.log(`regresando`)
        return;
    }
    let condition = true
    do {

        try {

            switch (opcion) {
                case 1://Doc texto

                    let titulo = await rl.question(`Escriba el Titulo que desea publicar: `)
                    const pubT = new PostText(titulo, 1)
                    Publicaciones.push(pubT)
                    console.log(`Su Documento de texto con el titulo ${Publicaciones[opcion - 1]['title']} fue publicado con exito`)
                    Menu()
                    break;
                case 2://imagen
                    let titulo1 = await rl.question(`Escriba el Titulo que desea publicar: `)

                    const pubI = new PostImage(titulo1, 2)
                    Publicaciones.push(pubI)
                    console.log(pubI.postContent)
                    Menu()
                    break;
                case 3://video
                    const titulo2 = await rl.question(`Escriba el Titulo que desea publicar: `)
                    const pubV = new PostVideo(titulo2, 3)
                    Publicaciones.push(pubV)
                    console.log(pubV.postContent)
                    Menu()
                    break;
                case 4:
                    console.log(`regresando`)
                    Menu()
                    break;

                default:
                    condition = false
                    break;

            }

        } catch (error) {
            console.error(error)
        } finally {
            return;
        }

    } while (condition);

}

export let Publicaciones: any = []

