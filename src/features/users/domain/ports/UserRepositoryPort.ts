import { UserId } from "@/src/common/domain/valueobjects/UserId";
import { User } from "../entities/User";

export interface UserRepositoryPort {
  findUserById(userId: UserId): Promise<User | null>;
}

export const UserRepositoryPortSymbol = Symbol('UserRepositoryPort');