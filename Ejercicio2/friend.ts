import { rl } from "./readline";
import { ManageFriends } from "./interface";
import { Publicaciones } from "./post";
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
export async function manageFriends() {//agregar o eliminar amigos
    const opcion = Number(await rl.question(`que desea hacer \n 1. agregar un amigo. \n 2. eliminar un amigo. \n ocpion: `))
    seeFriends(friendsList)
    switch (opcion) {
        case 1:
            const newName = await rl.question(`Escriba el nombre de su nuevo amigo: `)
            const amigo3 = new Friends(3,newName)
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

export async function shareFriend() {// esto para compartir con los amigos
    console.log(Publicaciones)
    let tipoPublicacion = Number(await rl.question(`que publicacion quiere compartir? `))

    seeFriends(friendsList)
    const opcion = Number(await rl.question(`con quien desea compartir esta publicacion? \n opcion: `))
    //falta agregar aqui creo que un for servira
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
export const amigo3 = friendsList.findIndex(Friends => Friends.id === 3)