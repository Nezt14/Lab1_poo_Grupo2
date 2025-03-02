import { Publicaciones } from "./post";
import { seePosts } from "./post";
import { PostText } from "./publicacion";
import { rl } from "./readline";
import { publicaralgo } from "./post";

class Comentario{
    constructor(public content:string){}
}

class CajaComents{
    private TComent:Comentario[]= [];
    private IComent:Comentario[]= [];
    private VComent:Comentario[]= [];

    public addTComent(TComent:Comentario):void{
        this.TComent.push(TComent)
    }
    public addIComent(IComent:Comentario):void{
        this.IComent.push(IComent)
    }
    public addVComent(VComent:Comentario):void{
        this.VComent.push(VComent)
    }

    public verTextComent():void{
        this.TComent.forEach(TComent => {
            console.log(TComent.content)
        });
    }
    public verImageComent():void{
        this.IComent.forEach(IComent => {
            console.log(IComent.content)
        });
    }
}

export const cajaComents = new CajaComents()


export async function ManejarComentarios() {
    // un switch para que pueda elejir si ver los comentarios o agregar uno
}