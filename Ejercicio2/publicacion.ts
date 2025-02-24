
abstract class Post {

    public abstract postContent(title:string, id:number): any

    public abstract coment(coment:string):any

}

abstract class Publicar extends Post {
    public postContent(title: string, id: number) {
        if (id = 1) {
            //es texto
            let type = `Documento de texto`
            return `Publicando su ${type}, con el titulo de ${title} ...`

        } else if (id = 2) {
            //es imagen
            let type = `Imagen`
            return `Publicando su ${type}, con el titulo de ${title} ...`
        } else if (id = 3) {
            //es video
            let type = `Video`
            return `Publicando su ${type}, con el titulo de ${title} ...`
        }   
    }
}

abstract class Comentar extends Post {// quiza cambiar esto
    public coment(coment: string): any {
        
    }
}