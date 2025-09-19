export interface UserRepositoryPort {
  findUserById(userId: string): Promise<{ id: string; name: string } | null>;
}

export const UserRepositoryPortSymbol = Symbol('UserRepositoryPort');