import { UserRepositoryPortSymbol } from "@/src/features/users/domain/ports/UserRepositoryPort";
import { UserRepository } from "@/src/features/users/infra/adapters/UserRepository";
import { ContainerModule } from "inversify";

const infraContainerModule = new ContainerModule(({ bind }) => {
  bind(UserRepositoryPortSymbol).to(UserRepository).inSingletonScope();
});

export default infraContainerModule;