import { rl } from "./readline";
import { ManageFriends } from "./interface";


export  class Friends implements ManageFriends{
    constructor(public id: number, public name: string) {
    }
    public showFriends(): string {
        
        return `Sus amigos actuales son: \n ${friendsList[amigo1].name} \n ${friendsList[amigo2].name}  `
    }

    addFriend(): void {
        friendsList.push(new Friends(friendsList.length +1 ,""));

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

export async function seeFriends(friendsList:any[]) {
    for (let i = 0; i < friendsList.length; i++) {
        const amigo = friendsList[i];
        console.log(`${i+1}. ${amigo.name}`)
  }

}
export async function manageFriends(){//agregar o eliminar amigos
    const opcion = Number(await rl.question(`que desea hacer \n 1. agregar un amigo. \n 2. eliminar un amigo. \n  `))

}

export async function shareFriend() {// esto para compartir con los amigos
    const opcion = Number(await rl.question(`con quien desea compartir esta publicacion? \n ` + seeFriends(friendsList) +`\n opcion: `  ))
    //falta agregar aqui creo que un for servira
    switch (opcion) {
        case 1:
            console.log(`su (aqui la publicacion que se selecciono) fue compartida con ${friendsList[amigo1].name} `)
            break;
        case 2:
            console.log(`su (aqui la publicacion que se selecciono) fue compartida con ${friendsList[amigo2].name} `)
            break;
        case 3:
            console.log(`su (aqui la publicacion que se selecciono) fue compartida con ${friendsList[amigo2].name} `)
            break;

        default:
            break;
    }
}

friendsList.forEach(Friends => {
    console.log(`${Friends.name}`)// esto devuelve los nombres de toda la lista
});

shareFriend()
