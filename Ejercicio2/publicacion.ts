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
        
            return `Su ${type} con el titulo ${this.title} se esta publicando`
    }
    public coment(coment: string): any {

    }
    

}

abstract class Comentar extends Post {// quiza cambiar esto
    public coment(coment: string): any {

    }
}
