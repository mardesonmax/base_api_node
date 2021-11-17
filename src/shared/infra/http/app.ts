import 'reflect-metadata';
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';

import { appError } from './middlewares/appError';
import rateLimiter from './middlewares/rateLimiter';
import { router } from './routes';
import '~/shared/container';

const app = express();

app.use(rateLimiter);

app.use(express.json());

app.use(cors());
app.use(router);

app.use(appError);

export { app };
