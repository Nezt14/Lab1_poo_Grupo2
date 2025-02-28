import { rl } from "./readline";

export class Friends {
    constructor(public id :number, public name:string ){ 
    }
    public showFriends():string{
        return `Sus amigos actuales son: \n ${friendsList}  `
    }
}

const friendsList : Friends[]=[
    new Friends(1,`Manuel`),
    new Friends(2,`Cartonero`),
];

const indice = friendsList.findIndex(Friends =>Friends.id === 2)
const indice2 = friendsList.findIndex(Friends =>Friends.id === 1)
console.log(`amigo: ${friendsList[indice].name}`)

console.log(friendsList[indice].name, friendsList[indice2].name)
async function findFriend(){// esto para compartir con los amigos
const opcion = Number(await rl.question(`h`))
}