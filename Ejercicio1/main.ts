// src/main.ts
import { rl } from "./readline";
import {
    realizarTransaccion,
    ejecutarEstrategias,
    calcularTendencias,
    calcularGananciasPerdidas,
    agregarAlertaPrecio,
} from "./menuFunctions";

async function menu() {
    let condition = true;

    do {
        try {
            const opcion = Number(await rl.question(
                `Opciones disponibles: \n` +
                `1. Realizar transacción. \n` +
                `2. Ejecutar estrategias de trading. \n` +
                `3. Calcular tendencias y predicciones. \n` +
                `4. Calcular ganancias/pérdidas. \n` +
                `5. Agregar alerta de precio. \n` +
                `6. Salir. \n` +
                `Seleccione una opción: `
            ));

            switch (opcion) {
                case 1:
                    await realizarTransaccion();
                    break;
                case 2:
                    await ejecutarEstrategias();
                    break;
                case 3:
                    await calcularTendencias();
                    break;
                case 4:
                    await calcularGananciasPerdidas();
                    break;
                case 5:
                    await agregarAlertaPrecio();
                    break;
                case 6:
                    console.log("Saliendo del programa.");
                    condition = false;
                    rl.close();
                    break;
                default:
                    console.log("Opción no válida. Intente de nuevo.");
                    break;
            }
        } catch (error) {
            console.error("Error en el menú:", error);
        }
    } while (condition);
}

// Ejecutar el menú
menu();
