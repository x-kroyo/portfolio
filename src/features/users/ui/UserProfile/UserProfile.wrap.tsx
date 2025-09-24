"use client";
import { useInjection } from "@/src/common/infra/di/useInjection";
import FindUserByIdUseCase from "../../domain/usecases/FindUserByIdUseCase";
import { UserProfile } from "./UserProfile";
import { useAsync } from "@/src/common/ui/hooks/useAsync";
import { User } from "../../domain/entities/User";

export const UserProfileWrapper = () => {
  const findUserByIdUseCase = useInjection(FindUserByIdUseCase);
  const { loading, error, value: user } = useAsync<() => Promise<User | null>>(() => findUserByIdUseCase.handle({ userId: "1" }));
  return <UserProfile user={user} loading={loading} error={error} />;
}