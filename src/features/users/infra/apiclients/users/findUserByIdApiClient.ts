import axiosApiClient from "@/src/common/infra/api/axiosApiClient";
import { User } from "../../../domain/entities/User";
import { UserId } from "@/src/common/domain/valueobjects/UserId";
import { Email } from "../../../domain/valueobjects/Email";
import { PlainPassword } from "../../../domain/valueobjects/PlainPassword";
import { UserName } from "../../../domain/valueobjects/UserName";
import { Role } from "../../../domain/valueobjects/Role";
import { Avatar } from "../../../domain/valueobjects/Avatar";

export interface FindUserByIdApiClientRequest {
  readonly userId: number;
}

export interface FindUserByIdApiClientResponse {
  readonly id: number;
  readonly email: string;
  readonly password: string;
  readonly name: string;
  readonly role: string;
  readonly avatar: string;
  readonly creationAt: Date;
  readonly updatedAt: Date;
}

export function mapFindUserByIdApiClientResponseToUser(data: FindUserByIdApiClientResponse): User {
  return {
    id: new UserId(data.id),
    email: new Email(data.email),
    password: new PlainPassword(data.password),
    name: new UserName(data.name),
    role: new Role(data.role),
    avatar: new Avatar(data.avatar),
    createdAt: data.creationAt,
    updatedAt: data.updatedAt,
  }
}

export async function findUserByIdApiClient(findUserByIdRequest: FindUserByIdApiClientRequest) {
  return axiosApiClient.get<FindUserByIdApiClientResponse>(`users/${findUserByIdRequest.userId}`)
}