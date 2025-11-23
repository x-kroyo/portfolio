import { expect, describe, it } from 'vitest'
import { InvalidEmailException } from "@/src/features/users/domain/exceptions/InvalidEmailError";
import { Email } from "@/src/features/users/domain/valueobjects/Email";

describe("Email value object", () => {
  it("should create an Email instance with a valid email", () => {
    const validEmail = "test@example.com";
    const email = new Email(validEmail);
    expect(email.value()).toBe(validEmail);
  });

  it("should normalize email to lowercase", () => {
    const mixedCaseEmail = "Test@Example.com";
    const lowerCaseEmail = "test@example.com";
    const email = new Email(mixedCaseEmail);
    expect(email.value()).toBe(lowerCaseEmail);
  });


  it("should throw InvalidEmailException for an invalid email", () => {
    const emailStr = "example.com";

    const t = () => new Email(emailStr);
    expect(t).toThrow(InvalidEmailException);
    expect(t).toThrow("Invalid email format: example.com");
    
  });

});
