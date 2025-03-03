import { Juego } from "./juego";
import { Prestamo,Estadisticas } from "./types";
import { Genero } from "./enums";

export class Inventario {
    private juegos: Juego[] = [];
    private prestamos: Prestamo[] = [];

    agregarJuego(juego: Juego): void {
        this.juegos.push(juego);
    }

    eliminarJuego(id: number): void {
        this.juegos = this.juegos.filter(juego => juego.id !== id);
    }

    prestarJuego(juegoId: number, prestadoA: string): void {
        const juego = this.juegos.find(j => j.id === juegoId);
        if (!juego) {
            throw new Error("Juego no encontrado.");
        }
        juego.prestar();
        this.prestamos.push({ juegoId, prestadoA, fechaPrestamo: new Date() });
    }

    devolverJuego(juegoId: number): void {
        const prestamo = this.prestamos.find(p => p.juegoId === juegoId && !p.fechaDevolucion);
        if (!prestamo) {
            throw new Error("Préstamo no encontrado o ya devuelto.");
        }
        const juego = this.juegos.find(j => j.id === juegoId);
        if (juego) {
            juego.devolver();
        }
        prestamo.fechaDevolucion = new Date();
    }

    calcularEstadisticas(): Estadisticas {
        const totalJuegos = this.juegos.length;
        const juegosPrestados = this.juegos.filter(j => j.prestado).length;
        const juegosDisponibles = totalJuegos - juegosPrestados;
        const generos = this.juegos.map(j => j.genero);
        const generoMasComun = this.mode(generos);

        return {
            totalJuegos,
            juegosPrestados,
            juegosDisponibles,
            generoMasComun
        };
    }

    generarRecomendaciones(genero: Genero): Juego[] {
        return this.juegos.filter(j => j.genero === genero && !j.prestado);
    }

    private mode(array: Genero[]): Genero {
        return array.sort((a, b) =>
            array.filter(v => v === a).length - array.filter(v => v === b).length
        ).pop()!;
    }
}