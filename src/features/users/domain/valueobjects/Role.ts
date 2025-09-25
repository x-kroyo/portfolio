export class Role {

  constructor(private readonly _value: string) {
  }

  public value(): string {
    return this._value;
  }
}