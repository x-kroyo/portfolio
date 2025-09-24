import { User } from "../../domain/entities/User";
import { UserRepositoryPort } from "../../domain/ports/UserRepositoryPort";
import { injectable } from "inversify";

@injectable()
export class UserRepository implements UserRepositoryPort {
  async findUserById(userId: string): Promise<User | null> {
    // TODO: Replace with actual data retrieval logic (e.g., database query)
    return { id: userId, name: "John Doe" };
  }
}