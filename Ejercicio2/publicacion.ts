import { publicaralgo } from "./post"

let type = ` `
abstract class Post {
    constructor(public title: string, public id: number) { }

    public abstract postContent(title: string, id: number): any

    public abstract coment(coment: string): any
}

export class PostText extends Post {
    public postContent(title: string, id: number) {
        return `Su Documento de texto con el titulo de ${this.title} se esta publicando.`
    }
    public coment(coment: string) {
        
    }
}
export class PostImage extends Post {
    public postContent(title: string, id: number) {
        return `Su Imagen con el titulo de ${this.title} se esta publicando.`
    }
    public coment(coment: string) {
        
    }
}
export class PostVideo extends Post {
    public postContent(title: string, id: number) {
        
        return `Su Video con el titulo de ${this.title} se esta publicando.`
    }
    public coment(coment: string) {
        
    }
}

