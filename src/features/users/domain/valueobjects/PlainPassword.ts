export class PlainPassword {
  
  constructor(private readonly _value: string) {
  }

  value() {
    return this._value;
  }
}