import { Publicaciones } from "./post";
import { seePosts } from "./post";
import { PostText } from "./publicacion";
import { rl } from "./readline";
import { publicaralgo } from "./post";
import { isAwaitExpression } from "typescript";
import { Menu } from "./main";

class Comentario {
    constructor(public content: string) { }
}

class CajaComents {
    public TComent: Comentario[] = [];
    public IComent: Comentario[] = [];
    public VComent: Comentario[] = [];

    public addTComent(TComent: Comentario): void {
        this.TComent.push(TComent)
    }
    public addIComent(IComent: Comentario): void {
        this.IComent.push(IComent)
    }
    public addVComent(VComent: Comentario): void {
        this.VComent.push(VComent)
    }

    public verTextComent(): void {
        this.TComent.forEach(TComent => {
            console.log(TComent.content)
        });
    }
    public verImageComent(): void {
        this.IComent.forEach(IComent => {
            console.log(IComent.content)
        });
    }
    public verVideoComent(): void {
        this.VComent.forEach(VComent => {
            console.log(VComent.content)
        });
    }
}


const cajaComents = new CajaComents()

export async function ManejarComentarios() {
    
    let condition = true
    do {
        try {
            const opcion = Number(await rl.question(`que quiere hacer?  \n 1. ver comentarios. \n 2. dejar un comentario. \n 3. regresar \n opcion: `))
            switch (opcion) {
                case 1:
                    console.log(`de que publicacion quiere ver los comentarios?`)
                    seePosts(Publicaciones)
                    const opcion1 = Number(await rl.question(`opcion: `))
                    switch (opcion1) {
                        case 1:
                            console.log(`comentarios actuales:`)
                            cajaComents.verTextComent();
                            ManejarComentarios()
                            break;
                        case 2:
                            console.log(`comentarios actuales:`)
                            cajaComents.verImageComent();
                            ManejarComentarios()
                            break;
                        case 3:
                            console.log(`comentarios actuales: `)
                            cajaComents.verVideoComent();
                            ManejarComentarios()
                            break;


                        default:
                            break;
                    }
                    break;
                case 2:
                    console.log(`En que publicacion quiere dejar un comentario?`)
                    seePosts(Publicaciones)
                    const opcion2 = Number(await rl.question(`opcion: `))
                    switch (opcion2) {
                        case 1:
                            const ComentTexto = await rl.question(`Comentario: `)
                            const comTexto = new Comentario(ComentTexto)
                            cajaComents.addTComent(comTexto)
                            console.log(`comentario agregado correctamente `)
                            ManejarComentarios()
                            break;
                        case 2:
                            const ComentImage = await rl.question(`Comentario: `)
                            const comImage = new Comentario(ComentImage)
                            cajaComents.addIComent(comImage)
                            console.log(`comentario agregado correctamente `)
                            ManejarComentarios()
                            break;
                        case 3:
                            const ComentVideo = await rl.question(`Comentario: `)
                            const comVideo = new Comentario(ComentVideo)
                            cajaComents.addVComent(comVideo)
                            console.log(`comentario agregado correctamente `)
                            ManejarComentarios()
                            break;


                        default:
                            break;
                    }

                    break;
                case 3:
                    console.log(`Regresando...`)
                    Menu()
                    
                    break;
                default:
                    
                    break;
            }

        } catch (error) {

        }

    } while (condition);

}

