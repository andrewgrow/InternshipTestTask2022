import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

const port = process.env.PORT ?? 3000;

/**
 * The main async function, which will bootstrap this application.
 */
async function bootstrap(): Promise<void> {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    await app.listen(port);
    console.log(`Server running on http://localhost:${port}`);
}

/* Starting the application. ESLint also require that Promise be marked as void return and has then() handler. */
void bootstrap().then();
