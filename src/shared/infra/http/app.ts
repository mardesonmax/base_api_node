import 'express-async-errors';
import 'reflect-metadata';
import cors from 'cors';
import express from 'express';

import '~shared/container';

import { appError } from './middlewares/appError';
import rateLimiter from './middlewares/rateLimiter';
import { routes } from './routes';

const app = express();

app.use(rateLimiter);

app.use(express.json());

app.use(cors());
app.use(routes);

app.use(appError);

export { app };
