import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { Rate } from './rate.interface';

/**
 * The Rates service provide processing of rates data.
 */
@Injectable()
export class RatesService {
    async getRate(currency: string): Promise<Rate> {
        return await Promise.resolve(currency)
            .then((currency?: string) => {
                if (
                    currency === null ||
                    currency === undefined ||
                    currency.trim().length === 0
                ) {
                    throw new Error('Empty currency query.');
                }
                return currency;
            })
            .then(async (currency: string) => {
                return await fetch(
                    `https://api.coincap.io/v2/rates/${currency}`
                );
            })
            .then((value: Response) => {
                if (value.ok !== null && value.ok !== undefined) {
                    return value.json();
                } else {
                    throw new Error('Response from remote server is bad.');
                }
            })
            .then((value: Response) => {
                const result: number = value.data.rateUsd;
                if (result !== null && result !== undefined) {
                    return { usd: result };
                } else {
                    throw new Error('Remote rate not found.');
                }
            });
    }
}
