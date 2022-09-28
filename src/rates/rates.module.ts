import { Module } from '@nestjs/common';
import { RatesController } from './rates.controller';
import { RatesService } from './rates.service';

/**
 * The Rates module is responsible for processing of rates dependencies.
 */
@Module({
    controllers: [RatesController],
    providers: [RatesService],
})
export class RatesModule {}
