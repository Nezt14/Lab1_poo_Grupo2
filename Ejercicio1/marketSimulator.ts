// src/marketSimulator.ts
import { IOrder, ITradingStrategy } from './interface';
import { MarketData, marketData } from './marketData';
import { PriceAlert } from './priceAlerts';
import { TrendCalculator } from './trendCalculator';

export class MarketSimulator {
    private orders: IOrder[] = [];
    private strategies: ITradingStrategy[] = [];
    private priceAlerts: PriceAlert = new PriceAlert();
    private trendCalculator: TrendCalculator = new TrendCalculator();

    constructor() {}

    addOrder(order: IOrder): void {
        this.orders.push(order);
    }

    addStrategy(strategy: ITradingStrategy): void {
        this.strategies.push(strategy);
    }

    addPriceAlert(symbol: string, targetPrice: number, callback: () => void): void {
        this.priceAlerts.addAlert(symbol, targetPrice, callback);
    }

    updateMarket(symbol: string, price: number): void {
        marketData.updatePrice(symbol, price);
        this.priceAlerts.checkPrice(symbol, price);
        this.trendCalculator.updateHistory(symbol, price);
    }

    runSimulation(): void {
        this.strategies.forEach(strategy => strategy.executeStrategy());
        this.orders.forEach(order => order.execute());
    }

    getTrend(symbol: string): string {
        return this.trendCalculator.calculateTrend(symbol);
    }
}