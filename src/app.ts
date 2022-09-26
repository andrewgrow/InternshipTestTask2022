import * as express from 'express';
import { ratesRouter } from "./routes/rates";

const app = express();
app.use('/', ratesRouter);

const port: String = process.env.PORT || '3000';
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

export {};