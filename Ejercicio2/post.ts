import { rl } from "./readline"
// clase para imagen, texto, video 



async function publicaralgo() {
    let condition = true
    do {
        try {
            const opcion = Number(await rl.question("Que desea publicar? \n 1. Documento de texto. \n 2. Imagen \n 3. Video. \n Opcion: "))
            if (opcion > 3) {
                console.log(`Seleccione una opcion valida`)
            } else {
                switch (opcion) {
                    case 1:

                        break;
                    case 2:
                        break;
                    case 3:
                        break;

                    default:
                        break;
                }
            }

        } catch (error) {
            console.error(error)
        } finally {

        }

    } while (condition);
}


// en alguna parte meter esto

