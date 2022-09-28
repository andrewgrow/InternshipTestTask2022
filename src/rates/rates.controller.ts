import { Controller, Get, Query, Res } from '@nestjs/common';
import { RatesService } from './rates.service';
import { Response } from 'express';
import { Rate } from './rate.interface';

/**
 * The Rates controller is responsible for routing of requests and responses.
 */
@Controller('rates')
export class RatesController {
    private readonly ratesService: RatesService;

    constructor(ratesService: RatesService) {
        this.ratesService = ratesService;
    }

    @Get()
    findRate(
        @Query('currency') currency: string,
        @Res() res: Response
    ): Response {
        this.ratesService
            .getRate(currency)
            .then((rate: Rate) => {
                return res.json(rate);
            })
            .catch(() => {
                return res.status(404).send('Not found.');
            });
    }
}
