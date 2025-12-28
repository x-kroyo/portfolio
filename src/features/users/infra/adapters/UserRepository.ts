import { User } from "@/src/features/users/domain/entities/User";
import { UserRepositoryPort } from "@/src/features/users/domain/ports/UserRepositoryPort";
import { UserId } from "@/src/common/domain/valueobjects/UserId";
import { Email } from "@/src/features/users/domain/valueobjects/Email";
import { PlainPassword } from "@/src/features/users/domain/valueobjects/PlainPassword";
import { Avatar } from "@/src/features/users/domain/valueobjects/Avatar";
import { Role } from "@/src/features/users/domain/valueobjects/Role";
import { UserName } from "@/src/features/users/domain/valueobjects/UserName";
import { getUsersByIdOptions } from "@/src/features/users/infra/api/http/generated/@tanstack/react-query.gen";
import { QueryClient } from "@tanstack/react-query";
import { inject, injectable } from "inversify";

@injectable()
export class UserRepository implements UserRepositoryPort {
  constructor(
    @inject(QueryClient) private readonly queryClient: QueryClient,
  ) {}

  async findUserById(userId: UserId): Promise<User | null> {
    const id = userId.value();
    const opts = getUsersByIdOptions({ path: { id } });
    return this.queryClient.fetchQuery(opts)
      .then(user => ({
        id: new UserId(user.id),
        email: new Email(user.email),
        password: new PlainPassword(user.password),
        name: new UserName(user.name),
        role: new Role(user.role),
        avatar: new Avatar(user.avatar),
        createdAt: new Date(user.creationAt),
        updatedAt: new Date(user.updatedAt)
      }))
      .catch(() => null);
  }
}
