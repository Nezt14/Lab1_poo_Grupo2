import { rl } from "./readlie";

const simulator = new MarketSimulator();

export async function realizarTransaccion() {
    try {
        const symbol = await rl.question("Ingrese el símbolo de la criptomoneda (ej. BTC, ETH): ");
        const quantity = Number(await rl.question("Ingrese la cantidad: "));
        const price = Number(await rl.question("Ingrese el precio: "));
        const tipoOrden = await rl.question("Ingrese el tipo de orden (market/limit): ");

        let order;
        if (tipoOrden.toLowerCase() === "market") {
            order = new MarketOrder(symbol, quantity, price);
        } else if (tipoOrden.toLowerCase() === "limit") {
            order = new LimitOrder(symbol, quantity, price);
        } else {
            console.log("Tipo de orden no válido.");
            return;
        }

        simulator.addOrder(order);
        console.log("Orden agregada correctamente.");
    } catch (error) {
        console.error("Error al realizar la transacción:", error);
    }
}

export async function ejecutarEstrategias() {
    try {
        const symbol = await rl.question("Ingrese el símbolo de la criptomoneda (ej. BTC, ETH): ");
        const estrategia = await rl.question("Ingrese la estrategia (movingAverage/rsi): ");

        let strategy;
        if (estrategia.toLowerCase() === "movingaverage") {
            strategy = new MovingAverageStrategy(symbol);
        } else if (estrategia.toLowerCase() === "rsi") {
            strategy = new RSIStrategy(symbol);
        } else {
            console.log("Estrategia no válida.");
            return;
        }

        simulator.addStrategy(strategy);
        console.log("Estrategia ejecutada correctamente.");
    } catch (error) {
        console.error("Error al ejecutar estrategias:", error);
    }
}

export async function calcularTendencias() {
    try {
        const symbol = await rl.question("Ingrese el símbolo de la criptomoneda (ej. BTC, ETH): ");
        const trend = simulator.getTrend(symbol);
        console.log(`Tendencia para ${symbol}: ${trend}`);
    } catch (error) {
        console.error("Error al calcular tendencias:", error);
    }
}

export async function calcularGananciasPerdidas() {
    try {
        const symbol = await rl.question("Ingrese el símbolo de la criptomoneda (ej. BTC, ETH): ");
        const orders = simulator.getOrdersBySymbol(symbol);

        if (orders.length === 0) {
            console.log("No hay órdenes para este símbolo.");
            return;
        }

        orders.forEach((order, index) => {
            const profitLoss = order.calculateProfitLoss();
            console.log(`Orden ${index + 1}: ${profitLoss >= 0 ? "Ganancia" : "Pérdida"} de ${Math.abs(profitLoss)}`);
        });
    } catch (error) {
        console.error("Error al calcular ganancias/pérdidas:", error);
    }
}

export async function agregarAlertaPrecio() {
    try {
        const symbol = await rl.question("Ingrese el símbolo de la criptomoneda (ej. BTC, ETH): ");
        const targetPrice = Number(await rl.question("Ingrese el precio objetivo: "));

        simulator.addPriceAlert(symbol, targetPrice, () => {
            console.log(`ALERTA: El precio de ${symbol} ha alcanzado ${targetPrice}`);
        });

        console.log("Alerta de precio agregada correctamente.");
    } catch (error) {
        console.error("Error al agregar alerta de precio:", error);
    }
}
