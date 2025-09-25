export class PlainPassword {
  private readonly _value: string;
  
  constructor(value: string) {
    if (value.length < 8) {
      throw new Error("Password must be at least 8 characters long");
    }
    this._value = value;
  }

  value() {
    return this._value;
  }
}