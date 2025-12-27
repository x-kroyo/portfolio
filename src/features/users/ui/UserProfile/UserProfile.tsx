"use client";

import { ErrorDetail } from "@/src/common/ui/errorhandling/ErrorDetail";
import { TranslationMessage } from "@/src/common/ui/i18n/TranslationMessage";
import { User } from "@/src/features/users/domain/entities/User";
import { Loader } from "@/src/common/ui/components/Loader";
import Image from "next/image";

interface UserProfileProps {
  user?: User; // can technically be undefined
  loading: boolean;
  error?: ErrorDetail;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, loading, error }) => {
  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
        <TranslationMessage tKey={error.code} />
      </div>
    );
  }

  return (
    <div className="max-w-md w-full mx-auto bg-gray-900 shadow-lg rounded-2xl overflow-hidden border border-gray-800">
      <div className="flex items-center gap-4 p-6">
        <Image
          src={user!.avatar.value()}
          alt={user!.name.value()}
          className="w-16 h-16 rounded-full object-cover border border-gray-700"
        />
        <div>
          <h2 className="text-lg font-semibold text-white">{user!.name.value()}</h2>
          <p className="text-sm text-gray-400">{user!.email.value()}</p>
          <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded-full bg-indigo-800 text-indigo-200">
            {user!.role.value()}
          </span>
        </div>
      </div>
      <div className="border-t border-gray-800 px-6 py-4 text-xs text-gray-400">
        <p>Created: {new Date(user!.createdAt).toLocaleDateString()}</p>
        <p>Updated: {new Date(user!.updatedAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};
