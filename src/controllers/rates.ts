import { Request, Response } from 'express';

export class RatesController {
    getRate = async function (req: Request, res: Response): Promise<void> {
        return await Promise.resolve(req.query.currency)
            .then((currency?: string) => {
                if (currency === null || currency === undefined || currency.trim().length === 0) {
                    throw new Error('Empty currency query.');
                }
                return currency;
            }).then(async (currency: string) => {
                return await fetch(`https://api.coincap.io/v2/rates/${currency}`);
            }).then((value: Response) => {
                if (value.ok !== null && value.ok !== undefined) {
                    return value.json();
                } else {
                    throw new Error('Response from remote server is bad.');
                }
            }).then((value: Response) => {
                const result = value.data.rateUsd;
                if (result !== null && result !== undefined) {
                    return res.status(200).json({ usd: result });
                } else {
                    throw new Error('Remote rate not found.');
                }
            }).catch(() => {
                return res.status(404).send('Not found.');
            });
    };
}
