import { inject, injectable } from "inversify";
import { UserRepositoryPortSymbol, type UserRepositoryPort } from "@/src/features/users/domain/ports/UserRepositoryPort";
import FindUserByIdCommand from "./FindUserByIdCommand";
import { User } from "@/src/features/users/domain/entities/User";
import { UserNotFoundError } from "@/src/features/users/domain/exceptions/UserNotFoundError";

@injectable()
export default class FindUserByIdUseCase {
  constructor(@inject(UserRepositoryPortSymbol) private userRepository: UserRepositoryPort) {}

  async handle(findUserByIdCommand: FindUserByIdCommand): Promise<User> {
    const user = await this.userRepository.findUserById(findUserByIdCommand.userId);
    if (user == null) {
      throw new UserNotFoundError(findUserByIdCommand.userId);
    }
    return user;
  }
}
