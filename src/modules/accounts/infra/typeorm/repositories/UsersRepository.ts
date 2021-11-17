import { IUsersRepository } from '~/modules/accounts/repositories/IUsersRepository';

class UsersRepository implements IUsersRepository {
  create(data: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export { UsersRepository };
