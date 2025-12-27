import axiosApiClient from "@/src/common/infra/api/axiosApiClient";
import { User } from "@/src/features/users/domain/entities/User";
import { UserId } from "@/src/common/domain/valueobjects/UserId";
import { Email } from "@/src/features/users/domain/valueobjects/Email";
import { PlainPassword } from "@/src/features/users/domain/valueobjects/PlainPassword";
import { UserName } from "@/src/features/users/domain/valueobjects/UserName";
import { Role } from "@/src/features/users/domain/valueobjects/Role";
import { Avatar } from "@/src/features/users/domain/valueobjects/Avatar";
import { z } from "zod";

export interface FindUserByIdApiClientRequest {
  readonly userId: number;
}

const findUserByIdApiClientResponseSchema = z.object({
  id: z.number(),
  email: z.email(),
  password: z.string().min(6),
  name: z.string(),
  role: z.enum(["customer", "admin"]),
  avatar: z.httpUrl(),
  creationAt: z.string().refine((date) => !isNaN(Date.parse(date))),
  updatedAt: z.string().refine((date) => !isNaN(Date.parse(date))),
});

export type FindUserByIdApiClientResponse = z.infer<typeof findUserByIdApiClientResponseSchema>;

export function mapFindUserByIdApiClientResponseToUser(data: FindUserByIdApiClientResponse): User {
  return {
    id: new UserId(data.id),
    email: new Email(data.email),
    password: new PlainPassword(data.password),
    name: new UserName(data.name),
    role: new Role(data.role),
    avatar: new Avatar(data.avatar),
    createdAt: new Date(data.creationAt),
    updatedAt: new Date(data.updatedAt),
  }
}

export async function findUserByIdApiClient(findUserByIdRequest: FindUserByIdApiClientRequest) {
  const responseData = await axiosApiClient.get<FindUserByIdApiClientResponse>(`users/${findUserByIdRequest.userId}`)
  return findUserByIdApiClientResponseSchema.parse(responseData);
}
