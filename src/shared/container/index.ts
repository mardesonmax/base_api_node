import { container } from 'tsyringe';

import { UserRepository } from '~modules/accounts/infra/database/prisma/repositories/user-repository';
import { IUserRepository } from '~modules/accounts/repositories/i-user-repository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
