import { Request, Response } from 'express';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    return response
      .status(200)
      .json({ user: { id: '68509bbd-3add-4cdc-9123-0b0e79c63ab2' } });
  }
}

export { CreateUserController };
