import { User } from '@prisma/client';

import { IAccountDTO } from '../dtos/i-account-dto';

interface IUserRepository {
  create(data: IAccountDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}

export { IUserRepository };
