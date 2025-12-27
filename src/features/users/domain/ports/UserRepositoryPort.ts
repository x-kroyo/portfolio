import { UserId } from "@/src/common/domain/valueobjects/UserId";
import { User } from "@/src/features/users/domain/entities/User";

export interface UserRepositoryPort {
  findUserById(userId: UserId): Promise<User | null>;
}

export const UserRepositoryPortSymbol = Symbol('UserRepositoryPort');
