import { User } from "../entities/User";

export interface UserRepositoryPort {
  findUserById(userId: number): Promise<User | null>;
}

export const UserRepositoryPortSymbol = Symbol('UserRepositoryPort');