// src/abstractClasses.ts
import { IOrder } from './interface';
import { marketData } from './marketData';

export abstract class Order implements IOrder {
    constructor(public symbol: string, public quantity: number, public price: number) {}

    abstract execute(): void;

    calculateProfitLoss(): number {
        const currentPrice = marketData.getPrice(this.symbol);
        return (currentPrice - this.price) * this.quantity;
    }
}

export abstract class TradingStrategy implements TradingStrategy {
    constructor(public symbol: string) {}

    abstract executeStrategy(): void;
}
