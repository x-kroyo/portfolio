import User from "../entities/User";

export interface UserRepositoryPort {
  findUserById(userId: string): Promise<User | null>;
}

export const UserRepositoryPortSymbol = Symbol('UserRepositoryPort');