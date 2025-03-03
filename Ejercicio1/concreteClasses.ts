
import { Order, TradingStrategy } from './abstractClasses';
import { IOrder, ITradingStrategy } from './interface';

export class MarketOrder extends Order implements IOrder {
    execute(): void {
        console.log(`Ejecurar Orden de Mercado por ${this.quantity} unidades de ${this.symbol} a ${this.price}`);
    }
}

export class LimitOrder extends Order implements IOrder {
    execute(): void {
        console.log(`Ejecutar limite de orden por ${this.quantity} unidades de ${this.symbol} a ${this.price}`);
        
    }
}

export class MovingAverageStrategy extends TradingStrategy implements ITradingStrategy {
    executeStrategy(): void {
        console.log(`Ejecutando la estrategia de media móvil para ${this.symbol}`);
     
    }
}

export class RSIStrategy extends TradingStrategy implements ITradingStrategy {
    executeStrategy(): void {
        console.log(`Ejecutando la estrategia RSI para ${this.symbol}`);
      
    }
}