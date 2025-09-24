import { User } from "../../domain/entities/User";
import { UserRepositoryPort } from "../../domain/ports/UserRepositoryPort";
import { injectable } from "inversify";
import axiosApiClient from "@/src/common/infra/api/axiosApiClient";
import queryClient from "@/src/common/infra/api/queryClient";

@injectable()
export class UserRepository implements UserRepositoryPort {
  async findUserById(userId: string): Promise<User | null> {
    return queryClient.fetchQuery({
      queryKey: ['user', userId],
      queryFn: () => axiosApiClient.get<User>(`users/${userId}`)
    });
  }
}