import { User } from "../../domain/entities/User";
import { UserRepositoryPort } from "../../domain/ports/UserRepositoryPort";
import { injectable } from "inversify";
import queryClient from "@/src/common/infra/api/queryClient";
import { UserId } from "@/src/common/domain/valueobjects/UserId";
import { findUserByIdApiClient, FindUserByIdApiClientResponse, mapFindUserByIdApiClientResponseToUser } from "../apiclients/users/findUserByIdApiClient";

@injectable()
export class UserRepository implements UserRepositoryPort {
  async findUserById(userId: UserId): Promise<User | null> {
    const id = userId.value();
    return queryClient.fetchQuery({
      queryKey: ['user', id],
      queryFn: async () => {
        try {
          const response : FindUserByIdApiClientResponse = await findUserByIdApiClient({ userId: id });
          return mapFindUserByIdApiClientResponseToUser(response);
        } catch {
          return null;
        }
      }
    });
  }
}