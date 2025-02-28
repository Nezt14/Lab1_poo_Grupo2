import { rl } from "./readline";
import { publicaralgo } from "./post";
import { Friends, friendsList } from "./friend";
import { ManageFriends } from "./interface";


//Redes sociales
export async function Menu() {

    let condition = true;

    do {// no de donde meter lo de Notificar interacciones
        try {
            const opcion1 = Number(await rl.question(`Opciones disponibles: \n 1. Publicar algo. \n 2. Gestionar amistades. \n 3. Ver publicaciones. \n 4. Ver mensajes \n 5. Interacciones. \n 6. salir. \n opcion: `))
            switch (opcion1) {
                case 1://publicar algo
                publicaralgo()
                    break;
                case 2:// gestionar amistades
                
                    break;
                case 3:// ver publicaciones "aqui meter ver comentarios y compartir publicaciones"

                    break;
                case 4://ver/mandar mensajes

                    break;
                case 5:// interacciones?

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