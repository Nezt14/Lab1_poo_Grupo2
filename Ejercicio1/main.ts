import { rl } from "./readlie";
async function Menu() {

    let condition = true;

    do {
        try {
            const opcion1 = Number(await rl.question(`Opciones disponibles: \n 1. Realizar transaccion. \n 2. Estrategias de traiding?. \n 3. Calcular tendencias y predicciones. \n 4. Calcular ganancias/perdidas. \n 5. salir. `))
            switch (opcion1) {// tampoco se donde meter lo de Generar alertas de precio , ni Maneje diferentes tipos de órdenes
                case 1://Realizar tansaccion

                    break;
                case 2:// Estrategias 

                    break;
                case 3:// Tendencias y prediciciones

                    break;
                case 4:// ganancias/perdidas  esto se puede con un if (si es + de tanto es ganancia y si es - es perdida)

                    break;
                    
                case 5:// salir
                    console.log(`Saliendo del programa`)
                    condition = false;
                    rl.close();
                    break;
                default:
                    break;
            }

        } catch (error) {

        }

    } while (condition = false);
}