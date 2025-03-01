// src/trendCalculator.ts
import { ITrendCalculator } from './interface';
import { marketData } from './marketData';

export class TrendCalculator implements ITrendCalculator {
    private history: { [key: string]: number[] } = {};

    calculateTrend(symbol: string): string {
        const prices = this.history[symbol] || [];
        if (prices.length < 2) return "neutral";

        const lastPrice = prices[prices.length - 1];
        const previousPrice = prices[prices.length - 2];

        if (lastPrice > previousPrice) return "up";
        if (lastPrice < previousPrice) return "down";
        return "neutral";
    }

    updateHistory(symbol: string, price: number): void {
        if (!this.history[symbol]) {
            this.history[symbol] = [];
        }
        this.history[symbol].push(price);
    }
}