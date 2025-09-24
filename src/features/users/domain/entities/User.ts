export interface User {
  readonly id: number;
  readonly email: string;
  readonly password: string;
  readonly name: string;
  readonly role: string;
  readonly avatar: string;
  readonly creationAt: Date;
  readonly updatedAt: Date;
}