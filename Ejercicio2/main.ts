import { rl } from "./readline";
import { publicaralgo } from "./post";


//Redes sociales
export async function Menu() {

    let condition = true;

    do {// no de donde meter lo de Notificar interacciones
        try {
            const opcion1 = Number(await rl.question(`Opciones disponibles: \n 1. Publicar algo. \n 2. Gestionar amistades. \n 3. Comentar una publicacion. \n 4. Compartir una publicacion \n 5. Ver mensajes. \n 6. salir. \n opcion: `))
            switch (opcion1) {
                case 1://publicar algo
                publicaralgo()
                    break;
                case 2:// gestionar amistades

                    break;
                case 3:// comentar una publicacion

                    break;
                case 4://compartir publicacion

                    break;
                case 5:// ver comentarios
                // para ver los comentarios se puede 

                    break;
                    
                case 6:// salir
                    console.log(`Saliendo del programa`)
                    condition = false;
                    rl.close();
                    break;
                default:
                    break;
            }

        } catch (error) {

        }

    } while (condition = false);
}

Menu()