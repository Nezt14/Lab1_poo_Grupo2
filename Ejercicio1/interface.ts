// src/interface.ts
export interface IOrder {
    execute(): void;
    calculateProfitLoss(): number;
}

export interface IMarketData {
    getPrice(symbol: string): number;
    updatePrice(symbol: string, price: number): void;
}

export interface ITradingStrategy {
    executeStrategy(): void;
}

export interface IPriceAlert {
    checkPrice(symbol: string, currentPrice: number): void;
}

export interface ITrendCalculator {
    calculateTrend(symbol: string): string; // "up", "down", "neutral"
}