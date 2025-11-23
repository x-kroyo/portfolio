import { InvalidAvatarUrlError } from "../exceptions/InvalidAvatarUrlError";

export class Avatar {
  private readonly _value: string;

  constructor(url: string) {
    if (!Avatar.isValid(url)) {
      throw new InvalidAvatarUrlError(url);
    }
    this._value = url;
  }

  public value(): string {
    return this._value;
  }

  private static isValid(url: string): boolean {
    try {
      const parsed = new URL(url);
      return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
      return false;
    }
  }
}