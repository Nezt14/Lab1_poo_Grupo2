import { Plataforma, Genero } from "./enums";

export class Juego {
    constructor(
        public id: number,
        public titulo: string,
        public plataforma: Plataforma,
        public genero: Genero,
        public prestado: boolean = false
    ) {}

    prestar(): void {
        if (this.prestado) {
            throw new Error("El juego ya está prestado.");
        }
        this.prestado = true;
    }

    devolver(): void {
        if (!this.prestado) {
            throw new Error("El juego no está prestado.");
        }
        this.prestado = false;
    }
}