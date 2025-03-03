import { rl } from "./readline";
import { ManageFriends } from "./interface";
import { Publicaciones, seePosts } from "./post";
import { Menu } from "./main";


export class Friends implements ManageFriends {
    constructor(public id: number, public name: string) {
    }
    addFriend(): void {
        friendsList.push(new Friends(friendsList.length + 1, ""));

    }
    deleteFriend(): void {

    }

}

export let friendsList: Friends[] = [
    new Friends(1, `Manuel`),
    new Friends(2, `Cartonero`),
];



export async function seeFriends(friendsList: any[]) {
    for (let i = 0; i < friendsList.length; i++) {
        const amigo = friendsList[i];
        console.log(`${i + 1}. ${amigo.name}`)
    }
}
export async function manageFriends() {
    const opcion = Number(await rl.question(`que desea hacer \n 1. agregar un amigo. \n 2. eliminar un amigo. \n ocpion: `))
    seeFriends(friendsList)
    switch (opcion) {
        case 1:
            const newName = await rl.question(`Escriba el nombre de su nuevo amigo: `)
            const amigo3 = new Friends(3, newName)
            friendsList.push(amigo3)
            console.log(`Nuevo amigo: ${newName} agregado con exito `)
            Menu()
            break;
        case 2:
            console.log(`a que amigo quiere eliminar:`)
            seeFriends(friendsList)
            const opcion2 = Number(await rl.question(`numero de amigo que quiere eliminar? `))
            const delFriend = friendsList.findIndex(Friends => Friends.id === opcion2)
            friendsList.splice(delFriend)
            console.log(`amigo eliminado correctamente`)
            Menu()
            break;


        default:
            break;
    }

}

export async function shareFriend() {
    seePosts(Publicaciones)
    let tipoPublicacion = Number(await rl.question(`que publicacion quiere compartir? `))


    seeFriends(friendsList)
    const opcion = Number(await rl.question(`con quien desea compartir esta publicacion? \n opcion: `))

    switch (opcion) {
        case 1:
            console.log(`su ${tipoPublicacion} fue compartida con ${friendsList[amigo1].name} `)
            break;
        case 2:
            console.log(`su (aqui la publicacion que se selecciono) fue compartida con ${friendsList[amigo2].name} `)
            break;
        case 3:
            console.log(`su (aqui la publicacion que se selecciono) fue compartida con ${friendsList[amigo2].name} `)
            break;

        default:
            Menu()
            break;
    }
}

export const amigo1 = friendsList.findIndex(Friends => Friends.id === 1)
export const amigo2 = friendsList.findIndex(Friends => Friends.id === 2)


export async function messages() {
    const ocpion = Number(await rl.question(`que quiere hacer \n 1. Ver mis mensajes. \n 2. Enviar un mensaje \n 3. Regresar`))
    switch (ocpion) {
        case 1:
            console.log(`Tienes un mensaje de ${friendsList[amigo1].name}. `)
            console.log(`Me prestas dinero?`)
            messages()
            break;
        case 2:
            console.log(`A quien quieres enviarle un mensaje`)
            seeFriends(friendsList)
            const opcion1 = Number(await rl.question(`opcion: `))
            switch (opcion1) {
                case 1:
                    const mensage = await rl.question(`mensaje: `)
                    console.log(`Mensaje enviado a ${friendsList[amigo1].name} `)
                    messages()
                    break;
                    case 2:
                    const mensage1 = await rl.question(`mensaje: `)
                    console.log(`Mensaje enviado a ${friendsList[amigo2].name} `)
                    messages()
                    break;
                    case 3:
                    const mensage2 = await rl.question(`mensaje: `)
                    const amigo3 = friendsList.findIndex(Friends => Friends.id === 3)
                    console.log(`Mensaje enviado a ${friendsList[amigo3].name} `)
                    messages()
                    break;
            
                default:
                    break;
            }

            break;
        case 3:
            console.log(`regresando...`)
            Menu()
            break;

        default:
            break;
    }
}