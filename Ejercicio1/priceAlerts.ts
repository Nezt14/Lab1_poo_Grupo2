// src/priceAlerts.ts
import { IPriceAlert } from './interface';

export class PriceAlert implements IPriceAlert {
    private alerts: { symbol: string; targetPrice: number; callback: () => void }[] = [];

    addAlert(symbol: string, targetPrice: number, callback: () => void): void {
        this.alerts.push({ symbol, targetPrice, callback });
    }

    checkPrice(symbol: string, currentPrice: number): void {
        this.alerts
            .filter(alert => alert.symbol === symbol)
            .forEach(alert => {
                if (currentPrice >= alert.targetPrice) {
                    alert.callback();
                }
            });
    }
}