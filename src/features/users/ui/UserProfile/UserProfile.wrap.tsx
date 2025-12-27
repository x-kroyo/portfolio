"use client";
import { useInjection } from "@/src/common/infra/di/useInjection";
import FindUserByIdUseCase from "@/src/features/users/domain/usecases/finduserbyid/FindUserByIdUseCase";
import { UserProfile } from "./UserProfile";
import { User } from "@/src/features/users/domain/entities/User";
import { UserId } from "@/src/common/domain/valueobjects/UserId";
import useAsyncFnWithResolvedError from "@/src/common/ui/hooks/useResolvedAsyncFn";

export const UserProfileWrapper = () => {
  const findUserByIdUseCase = useInjection(FindUserByIdUseCase);
  const { loading, error, value: user } = useAsyncFnWithResolvedError<() => Promise<User>>(
    () => findUserByIdUseCase.handle({ userId: new UserId(3) })
  );
  return <UserProfile user={user} loading={loading} error={error} />;
};
