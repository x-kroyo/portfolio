import { UserId } from "@/src/common/domain/valueobjects/UserId";
import { PlainPassword } from "../valueobjects/PlainPassword";
import { Email } from "../valueobjects/Email";
import { UserName } from "../valueobjects/UserName";
import { Role } from "../valueobjects/Role";
import { Avatar } from "../valueobjects/Avatar";

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