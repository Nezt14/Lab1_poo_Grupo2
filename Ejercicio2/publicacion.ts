
import { rl } from "./readline"

abstract class Post {
    constructor(public title: string, public id: number) { }

    public abstract postComtent(title: string, id: number): any

    public abstract seeComent(title: string): any
}
let comenta1 = ``
let comenta2 = ``
let comenta3 = ``

export class PostText extends Post {

    public postComtent(title: string, id: number) {
        
        return `comentarios: \n ${comenta1} `
    }
    public seeComent(title: string) {
        if (comenta1 = ``) {
            return `No hay comentarios`
        } else {
            return `Comentarios: \n ${comenta1} `
        }
    }

}
export class PostImage extends Post {
    public postComtent(title: string, id: number) {
        let comenta2 = rl.question(`escriba su comentario`)
        return `comentarios: \n ${comenta2} `
    }
    public seeComent(title: string) {
        if (comenta2 = ``) {
            return `No hay comentarios`
        } else {
            return `Comentarios: \n ${comenta2} `
        }
    }
}
export class PostVideo extends Post {
    public postComtent(title: string, id: number) {
        let comenta3 = rl.question(`escriba su comentario`)
        return `comentarios: \n ${comenta3} `
    }
    public seeComent(title: string) {
        if (comenta3 = ``) {
            return `No hay comentarios`
        } else {
            return `Comentarios: \n ${comenta3} `
        }
    }

}

