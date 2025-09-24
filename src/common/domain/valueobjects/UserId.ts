export class UserId {
  constructor(private readonly value: number) {
  }

  getValue(): number {
    return this.value;
  }
}