"use client";

import { useInjection } from "@/src/common/infra/di/useInjection";
import FindUserByIdUseCase from "../domain/usecases/FindUserByIdUseCase";
import { useEffect, useState } from "react";
import User from "../domain/entities/User";

export const UserProfile: React.FC = () => {
  const findUserByIdUseCase = useInjection(FindUserByIdUseCase);
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    findUserByIdUseCase.handle({ userId: "1" }).then(setUser);
  }, []);

  return <div>{user ? user.name : "Loading..."}</div>;
};