// src/concreteClasses.ts
import { Order, TradingStrategy } from './abstractClasses';
import { IOrder, ITradingStrategy } from './interface';

export class MarketOrder extends Order implements IOrder {
    execute(): void {
        console.log(`Executing Market Order for ${this.quantity} units of ${this.symbol} at ${this.price}`);
        // Lógica para ejecutar una orden de mercado
    }
}

export class LimitOrder extends Order implements IOrder {
    execute(): void {
        console.log(`Executing Limit Order for ${this.quantity} units of ${this.symbol} at ${this.price}`);
        // Lógica para ejecutar una orden límite
    }
}

export class MovingAverageStrategy extends TradingStrategy implements ITradingStrategy {
    executeStrategy(): void {
        console.log(`Executing Moving Average Strategy for ${this.symbol}`);
        // Lógica para ejecutar la estrategia de media móvil
    }
}

export class RSIStrategy extends TradingStrategy implements ITradingStrategy {
    executeStrategy(): void {
        console.log(`Executing RSI Strategy for ${this.symbol}`);
        // Lógica para ejecutar la estrategia RSI
    }
}