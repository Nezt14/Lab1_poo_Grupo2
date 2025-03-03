import { rl } from "./readline";
import { Interacciones, publicaralgo } from "./post";
import { Friends, friendsList, manageFriends, messages, seeFriends, shareFriend } from "./friend";
import { ManageFriends } from "./interface";
import { seePosts } from "./post";
import { Publicaciones } from "./post";
import { ManejarComentarios } from "./coment";



export async function Menu() {

    let condition = true;

    do {
        try {
            const opcion1 = Number(await rl.question(`Opciones disponibles: \n 1. Publicar algo. \n 2. Gestionar amistades. \n 3. Ver publicaciones. \n 4. Ver mensajes \n 5. Interacciones. \n 6. salir. \n opcion: `))
            switch (opcion1) {
                case 1:
                    console.log(`(hay que publicar en orden 1, 2, 3 para que funcione) `)
                    publicaralgo()
                    break;
                case 2:
                    const opcion2 = Number(await rl.question(`Que desea hacer? \n 1. Ver amistades \n 2. agregar o eliminiar un amigo \n opcion: `))
                    switch (opcion2) {
                        case 1:
                            seeFriends(friendsList)
                            Menu()
                            break;
                        case 2:
                            manageFriends()
                            break;

                        default:
                            break;
                    }
                    break;
                case 3:
                    console.log(`Publicaciones actuales:`)
                    seePosts(Publicaciones)
                    const opcion3 = Number(await rl.question(`Que desea hacer? \n 1. Comentarios \n 2. compartir publicacion \n 3. regresar \n opcion: `))
                    switch (opcion3) {
                        case 1:
                            ManejarComentarios()

                            break;
                        case 2:
                            shareFriend()
                            break;
                        case 3:
                            console.log(`regresando...`)
                            Menu()
                            break;
                        default:
                            break;
                    }

                    break;
                case 4:
                messages()
                    break;
                case 5:
                Interacciones()
                    break;

                case 6:
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