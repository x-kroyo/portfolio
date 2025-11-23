import { UserId } from "@/src/common/domain/valueobjects/UserId";
import { User } from "@/src/features/users/domain/entities/User";
import { UserRepositoryPort } from "@/src/features/users/domain/ports/UserRepositoryPort";

export class FakeUserRepository implements UserRepositoryPort {
  private users: Map<number, User> = new Map();

  async findUserById(userId: UserId): Promise<User | null> {
    return this.users.get(userId.value()) || null;
  }

}