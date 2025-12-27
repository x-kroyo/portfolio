import { UserId } from "@/src/common/domain/valueobjects/UserId";
import { PlainPassword } from "@/src/features/users/domain/valueobjects/PlainPassword";
import { Email } from "@/src/features/users/domain/valueobjects/Email";
import { UserName } from "@/src/features/users/domain/valueobjects/UserName";
import { Role } from "@/src/features/users/domain/valueobjects/Role";
import { Avatar } from "@/src/features/users/domain/valueobjects/Avatar";

export interface User {
  readonly id: UserId;
  readonly email: Email;
  readonly password: PlainPassword;
  readonly name: UserName;
  readonly role: Role;
  readonly avatar: Avatar;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
