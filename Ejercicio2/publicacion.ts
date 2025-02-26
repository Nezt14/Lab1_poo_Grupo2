import { publicaralgo } from "./post"

let type = ` `
abstract class Post {
    constructor(public title: string, public id: number) { }

    public abstract postContent(title: string, id: number): any

    public abstract coment(coment: string): any

    public postFinal(): any {
        return `Su ${type} con el titulo ${this.title} fue publicado con exito`
    }
}


export class PostThing extends Post {

    public postContent(title: string, id: number) {
        if (this.id = 1) {
            let type = `Documento de texto`
            return `Su ${type} con el titulo ${this.title} se esta publicando`

        } else if (this.id = 2) {
            let type = `Imagen`
            return `Su ${type} con el titulo ${this.title} se esta publicando`

        } else {
            let type = `Video`
            return `Su ${type} con el titulo ${this.title} se esta publicando`

        } 

    }
    public coment(coment: string): any {

    }

}

abstract class Comentar extends Post {// quiza cambiar esto
    public coment(coment: string): any {

    }
}
