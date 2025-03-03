import { Genero } from "./enums";

export type Prestamo = {
    juegoId: number;
    prestadoA: string;
    fechaPrestamo: Date;
    fechaDevolucion?: Date;
};

export type Estadisticas = {
    totalJuegos: number;
    juegosPrestados: number;
    juegosDisponibles: number;
    generoMasComun: Genero;
};