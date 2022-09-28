import { Module } from '@nestjs/common';
import { RatesModule } from './rates/rates.module';

/**
 * The root module is the starting point Nest uses to build the application graph.
 * Includes application dependencies.
 */
@Module({
    imports: [RatesModule],
})
export class AppModule {}
