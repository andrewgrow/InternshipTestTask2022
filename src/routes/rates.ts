import * as express from "express";
import { RatesController } from '../controllers/rates';

const ratesController = new RatesController();

export const ratesRouter = express.Router();
ratesRouter.get('/rates', ratesController.getRate);