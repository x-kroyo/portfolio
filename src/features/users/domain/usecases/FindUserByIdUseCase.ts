import { inject, injectable } from "inversify";
import { UserRepositoryPortSymbol, type UserRepositoryPort } from "../ports/UserRepositoryPort";
import FindUserByIdCommand from "./FindUserByIdCommand";

@injectable()
export default class FindUserByIdUseCase {
  constructor(@inject(UserRepositoryPortSymbol) private userRepository: UserRepositoryPort) {}

  async handle(findUserByIdCommand: FindUserByIdCommand): Promise<{ id: string; name: string } | null> {
    return this.userRepository.findUserById(findUserByIdCommand.userId);
  }
}