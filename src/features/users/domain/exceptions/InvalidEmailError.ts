import { AbstractDomainError } from "@/src/common/domain/exceptions/AbstractDomainError";

export class InvalidEmailException extends AbstractDomainError {
  constructor(email: string) {
    super(`Invalid email format: ${email}`);
  }
}
