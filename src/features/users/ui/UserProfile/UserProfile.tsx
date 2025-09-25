"use client";

import { User } from "../../domain/entities/User";

interface UserProfileProps {
  user?: User | null;
  loading: boolean;
  error?: Error;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, loading, error }) => {
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error: {error.message}</div>
  ) : (
    <div>User: {user?.name.value()}</div>
  );
};