export class UserId {
  constructor(private readonly _value: number) {
  }

  value(): number {
    return this._value;
  }
}