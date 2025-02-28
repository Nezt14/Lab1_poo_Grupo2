import { rl } from "./readline";

export class Friends {
    constructor(public id: number, public name: string) {
    }
    public showFriends(): string {
        return `Sus amigos actuales son: \n ${friendsList}  `
    }
}

export const friendsList: Friends[] = [
    new Friends(1, `Manuel`),
    new Friends(2, `Cartonero`),
];

const amigo1 = friendsList.findIndex(Friends => Friends.id === 1)
const amigo2 = friendsList.findIndex(Friends => Friends.id === 2)

const amigo3 = friendsList.findIndex(Friends => Friends.id === 3)

console.log(`amigo: ${friendsList[amigo2].name}`)

console.log(friendsList[amigo1].name, friendsList[amigo2].name)
export async function findFriend() {// esto para compartir con los amigos
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