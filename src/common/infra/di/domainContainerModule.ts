import FindUserByIdUseCase from "@/src/features/users/domain/usecases/FindUserByIdUseCase";
import { ContainerModule, ContainerModuleLoadOptions } from "inversify";

const domainContainerModule = new ContainerModule(({ bind }: ContainerModuleLoadOptions) => {
  bind(FindUserByIdUseCase).toSelf().inSingletonScope();
});

export default domainContainerModule;