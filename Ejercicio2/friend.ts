import { rl } from "./readline";
import { ManageFriends } from "./interface";


export  class Friends implements ManageFriends{
    constructor(public id: number, public name: string) {
    }
    public showFriends(): string {
        return `Sus amigos actuales son: \n ${friendsList}  `
    }

    addFriend(): void {
        const amigo3 = new Friends(3,``)

    }
    deleteFriend(): void {
        
    }

}

export const friendsList: Friends[] = [
    new Friends(1, `Manuel`),
    new Friends(2, `Cartonero`),
];

export const amigo1 = friendsList.findIndex(Friends => Friends.id === 1)
export const amigo2 = friendsList.findIndex(Friends => Friends.id === 2)
export const amigo3 = friendsList.findIndex(Friends => Friends.id === 3)

console.log(`amigo: ${friendsList[amigo2].name}`)

console.log(friendsList[amigo1].name, friendsList[amigo2].name)// muestra los dos nombres

export async function seeFriends() {
    const opcion = Number(await rl.question(``))

}
export async function manageFriends(){//agregar o eliminar amigos
    const opcion = Number(await rl.question(`que desea hacer \n 1. agregar un amigo. \n 2. eliminar un amigo. \n  `))

}

export async function shareFriend() {// esto para compartir con los amigos
    const opcion = Number(await rl.question(`con quien desea compartir esta publicacion? \n 1. ${amigo1} \n 2. ${amigo2} `))
    switch (opcion) {
        case 1:
            console.log(`su (aqui la publicacion que se selecciono) fue compartida con ${amigo1} `)
            break;
        case 2:
            console.log(`su (aqui la publicacion que se selecciono) fue compartida con ${amigo2} `)
            break;
        case 3:
            console.log(`su (aqui la publicacion que se selecciono) fue compartida con ${amigo3} `)
            break;

        default:
            break;
    }
}