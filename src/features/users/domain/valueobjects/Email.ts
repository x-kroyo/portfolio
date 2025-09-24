import { InvalidEmailException } from "../exceptions/InvalidEmailError";

export class Email {
  
  private static readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  private readonly _value: string;

  constructor(value: string) {
    if (!Email.EMAIL_REGEX.test(value)) {
      throw new InvalidEmailException(value);
    }
    this._value = value.toLowerCase();
  }

  value() {
    return this._value;
  }
}