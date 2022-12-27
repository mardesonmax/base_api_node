import { User } from '@prisma/client';

import { IAccountDTO } from '~modules/accounts/dtos/i-account-dto';
import { IUserRepository } from '~modules/accounts/repositories/i-user-repository';
import { prismaClient } from '~shared/infra/http/database/prisma';

export class UserRepository implements IUserRepository {
  private connection: typeof prismaClient.user;

  constructor() {
    this.connection = prismaClient.user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.connection.findFirst({
      where: {
        email,
      },
    });

    return user;
  }

  async create(data: IAccountDTO): Promise<User> {
    const user = await this.connection.create({
      data,
    });

    return user;
  }
}
