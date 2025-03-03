import * as readline from 'readline';
import { Juego } from './juego';
import { Inventario } from './inventario';
import { Plataforma, Genero } from './enums';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inventario = new Inventario();

function mostrarMenu(): void {
    console.log("\n1. Agregar Juego");
    console.log("2. Prestar Juego");
    console.log("3. Devolver Juego");
    console.log("4. Ver Estadísticas");
    console.log("5. Generar Recomendaciones");
    console.log("6. Salir");

    rl.question("Seleccione una opción: ", (opcion) => {
        switch (opcion) {
            case '1':
                agregarJuego();
                break;
            case '2':
                prestarJuego();
                break;
            case '3':
                devolverJuego();
                break;
            case '4':
                verEstadisticas();
                break;
            case '5':
                generarRecomendaciones();
                break;
            case '6':
                rl.close();
                break;
            default:
                console.log("Opción no válida.");
                mostrarMenu();
                break;
        }
    });
}

function agregarJuego(): void {
    rl.question("ID del juego: ", (id) => {
        rl.question("Título: ", (titulo) => {
            rl.question("Plataforma (PC, PlayStation, Xbox, Nintendo, Mobile): ", (plataforma) => {
                rl.question("Género (Acción, Aventura, RPG, Estrategia, Deportes, Puzzle): ", (genero) => {
                    const juego = new Juego(
                        parseInt(id),
                        titulo,
                        plataforma as Plataforma,
                        genero as Genero
                    );
                    inventario.agregarJuego(juego);
                    console.log("Juego agregado con éxito.");
                    mostrarMenu();
                });
            });
        });
    });
}

function prestarJuego(): void {
    rl.question("ID del juego a prestar: ", (id) => {
        rl.question("Nombre del prestatario: ", (prestadoA) => {
            try {
                inventario.prestarJuego(parseInt(id), prestadoA);
                console.log("Juego prestado con éxito.");
            } catch (error) {
                console.error(error);
            }
            mostrarMenu();
        });
    });
}

function devolverJuego(): void {
    rl.question("ID del juego a devolver: ", (id) => {
        try {
            inventario.devolverJuego(parseInt(id));
            console.log("Juego devuelto con éxito.");
        } catch (error) {
            console.error(error);
        }
        mostrarMenu();
    });
}

function verEstadisticas(): void {
    const estadisticas = inventario.calcularEstadisticas();
    console.log("\nEstadísticas:");
    console.log(`Total de juegos: ${estadisticas.totalJuegos}`);
    console.log(`Juegos prestados: ${estadisticas.juegosPrestados}`);
    console.log(`Juegos disponibles: ${estadisticas.juegosDisponibles}`);
    console.log(`Género más común: ${estadisticas.generoMasComun}`);
    mostrarMenu();
}

function generarRecomendaciones(): void {
    rl.question("Género para recomendaciones: ", (genero) => {
        const recomendaciones = inventario.generarRecomendaciones(genero as Genero);
        console.log("\nRecomendaciones:");
        recomendaciones.forEach(j => console.log(j.titulo));
        mostrarMenu();
    });
}

mostrarMenu();