import { Router } from 'express';

import { createAccountValidator } from '~modules/accounts/infra/middlewares/create-account-validator';
import { CreateAccountController } from '~modules/accounts/use-cases/create-account/create-account-controller';

const createAccountController = new CreateAccountController();

const accountRoutes = Router();

accountRoutes.post('/', createAccountValidator, createAccountController.handle);

export { accountRoutes };
