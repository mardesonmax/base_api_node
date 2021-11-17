import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '~/modules/accounts/repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUsersRepository
  ) {}

  execute() {
    return null;
  }
}

export { CreateUserUseCase };
