
import { IMarketData } from './interface';

export class MarketData implements IMarketData {
    private prices: { [key: string]: number } = {};

    getPrice(symbol: string): number {
        return this.prices[symbol] || 0;
    }

    updatePrice(symbol: string, price: number): void {
        this.prices[symbol] = price;
    }
}


export const marketData = new MarketData();