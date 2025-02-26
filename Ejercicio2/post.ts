import { rl } from "./readline"
import { PostImage } from "./publicacion";
import { PostText } from "./publicacion";
import { PostVideo } from "./publicacion";
// clase para imagen, texto, video 



export async function publicaralgo() {
    let condition = true
     let type =``
    do {
        
        try {
            const opcion = Number(await rl.question("Que desea publicar? \n 1. Documento de texto. \n 2. Imagen \n 3. Video. \n Opcion: "))
            if (opcion == 1) {
                let type = `Documento de texto`
                
            } else if (opcion == 2) {
                let type = `Imagen`
                
            
            } else {
                let type = `Video`
                
            } 
            if (opcion > 3) {
                console.log(`Seleccione una opcion valida`)
            } else {
                
                
                switch (opcion) {
                    case 1://Doc texto

                        let titulo = await rl.question(`Escriba el Titulo que desea publicar: `)
                        const pubT = new PostText(titulo, 1)
                        Publicaciones.push(pubT)
                        console.log(Publicaciones[0]['title'])// esto solo muestra el titulo sin nada

                        break;
                    case 2://imagen
                        let titulo1 = await rl.question(`Escriba el Titulo que desea publicar: `)
                        
                        const pubI = new PostImage(titulo1, 2)
                        console.log(pubI.postContent)
                        break;
                    case 3://video
                        const titulo2 = await rl.question(`Escriba el Titulo que desea publicar: `)

                        const pubV = new PostVideo(titulo2, 3)
                        console.log(pubV.postContent)
                        break;

                    default:
                        condition = false
                        return;
                }
            }

        } catch (error) {
            console.error(error)
        } finally {
           
        } 

    } while (condition);
}

export let Publicaciones:any = []

