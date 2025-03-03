// src/main.ts
import { MarketSimulator } from './marketSimulator';
import { MarketOrder, LimitOrder, MovingAverageStrategy, RSIStrategy } from './concreteClasses';
import { marketData } from './marketData';

// Crear instancia del simulador
const simulator = new MarketSimulator();

// Actualizar precios de mercado
simulator.updateMarket('BTC', 50000);
simulator.updateMarket('ETH', 4000);

// Crear órdenes
const marketOrder = new MarketOrder('BTC', 1, 50000);
const limitOrder = new LimitOrder('ETH', 10, 3900);

simulator.addOrder(marketOrder);
simulator.addOrder(limitOrder);

// Crear estrategias
const movingAverageStrategy = new MovingAverageStrategy('BTC');
const rsiStrategy = new RSIStrategy('ETH');

simulator.addStrategy(movingAverageStrategy);
simulator.addStrategy(rsiStrategy);

// Agregar alertas de precio
simulator.addPriceAlert('BTC', 51000, () => {
    console.log('ALERT: BTC Precio alcanzado 51000!');
});

// Ejecutar simulación
simulator.runSimulation();

// Calcular ganancias/pérdidas
console.log(`Ganancia/perdica por Orden de Mercado: ${marketOrder.calculateProfitLoss()}`);
console.log(`Ganancia/perdica por Orden Limitada: ${limitOrder.calculateProfitLoss()}`);

// Obtener tendencias
console.log(`BTC Tendencia: ${simulator.getTrend('BTC')}`);
console.log(`ETH Tendencia: ${simulator.getTrend('ETH')}`);
