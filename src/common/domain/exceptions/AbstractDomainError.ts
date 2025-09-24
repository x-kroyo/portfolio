export class AbstractDomainError extends Error {
  constructor(message: string) {
    super(message);
  }
}