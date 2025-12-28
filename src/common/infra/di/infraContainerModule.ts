import { UserRepositoryPortSymbol } from "@/src/features/users/domain/ports/UserRepositoryPort";
import { UserRepository } from "@/src/features/users/infra/adapters/UserRepository";
import { QueryClient } from "@tanstack/react-query";
import { ContainerModule } from "inversify";

const infraContainerModule = new ContainerModule(({ bind }) => {
  bind(QueryClient).toConstantValue(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 0,
          refetchOnWindowFocus: false,
        },
        mutations: {
          retry: 0,
        },
      }
    })
  );
  bind(UserRepositoryPortSymbol).to(UserRepository).inSingletonScope();
});

export default infraContainerModule;
