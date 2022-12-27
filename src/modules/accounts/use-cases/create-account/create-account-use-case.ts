import { inject, injectable } from 'tsyringe';

import { IAccountDTO } from '~modules/accounts/dtos/i-account-dto';
import { IUserRepository } from '~modules/accounts/repositories/i-user-repository';
import { AppError } from '~shared/errors/AppError';

@injectable()
class CreateAccountUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute(data: IAccountDTO) {
    const accountExists = await this.userRepository.findByEmail(data.email);

    if (accountExists) {
      throw new AppError('User already exists');
    }

    const account = await this.userRepository.create(data);

    return account;
  }
}

export { CreateAccountUseCase };
