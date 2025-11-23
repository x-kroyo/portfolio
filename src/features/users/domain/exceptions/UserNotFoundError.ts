import { AbstractDomainError } from "@/src/common/domain/exceptions/AbstractDomainError";
import { UserId } from "@/src/common/domain/valueobjects/UserId";

export class UserNotFoundError extends AbstractDomainError {
  constructor(userId: UserId) {
    super(`User with id ${userId.value()} not found`);
  }
}