interface IUsersRepository {
  create(data: string): Promise<void>;
}

export { IUsersRepository };
