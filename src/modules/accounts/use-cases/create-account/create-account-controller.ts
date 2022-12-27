import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAccountUseCase } from './create-account-use-case';

class CreateAccountController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createAccountUseCase = container.resolve(CreateAccountUseCase);

    const account = await createAccountUseCase.execute(data);

    return response.status(200).json(account);
  }
}

export { CreateAccountController };
