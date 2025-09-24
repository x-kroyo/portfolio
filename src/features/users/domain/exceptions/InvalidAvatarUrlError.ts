import { AbstractDomainError } from "../../../../common/domain/exceptions/AbstractDomainError";

export class InvalidAvatarUrlError extends AbstractDomainError {
  constructor(url: string) {
    super(`Invalid Avatar URL provided: ${url}`);
  }
}