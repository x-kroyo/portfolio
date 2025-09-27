import { User } from "../../domain/entities/User";
import { UserRepositoryPort } from "../../domain/ports/UserRepositoryPort";
import { injectable } from "inversify";
import axiosApiClient from "@/src/common/infra/api/axiosApiClient";
import queryClient from "@/src/common/infra/api/queryClient";
import { UserId } from "@/src/common/domain/valueobjects/UserId";
import { Email } from "../../domain/valueobjects/Email";
import { PlainPassword } from "../../domain/valueobjects/PlainPassword";
import { UserName } from "../../domain/valueobjects/UserName";
import { Role } from "../../domain/valueobjects/Role";
import { Avatar } from "../../domain/valueobjects/Avatar";

@injectable()
export class UserRepository implements UserRepositoryPort {
  async findUserById(userId: UserId): Promise<User | null> {
    const id = userId.value();
    return queryClient.fetchQuery({
      queryKey: ['user', id],
      queryFn: async () => {
        try {
          const data : any = await axiosApiClient.get(`users/${id}`);

          const user : User = {
            id: new UserId(data.id),
            email: new Email(data.email),
            password: new PlainPassword(data.password),
            name: new UserName(data.name),
            role: new Role(data.role),
            avatar: new Avatar(data.avatar),
            creationAt: data.creationAt,
            updatedAt: data.updatedAt,
          }
          return user;
        } catch (error) {
          return null;
        }
      }
    });
  }
}