"use client";
import { useInjection } from "@/src/common/infra/di/useInjection";
import FindUserByIdUseCase from "../../domain/usecases/FindUserByIdUseCase";
import { UserProfile } from "./UserProfile";
import { useAsync } from "@/src/common/ui/hooks/useAsync";
import { User } from "../../domain/entities/User";
import { UserId } from "@/src/common/domain/valueobjects/UserId";

export const UserProfileWrapper = () => {
  const findUserByIdUseCase = useInjection(FindUserByIdUseCase);
  const { loading, error, value: user } = useAsync<() => Promise<User | null>>(
    () => findUserByIdUseCase.handle({ userId: new UserId(1) })
  );
  return <UserProfile user={user} loading={loading} error={error} />;
}