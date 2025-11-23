import { expect, describe, it } from 'vitest'
import { InvalidAvatarUrlError } from "@/src/features/users/domain/exceptions/InvalidAvatarUrlError";
import { Avatar } from "@/src/features/users/domain/valueobjects/Avatar";

describe("Avatar value object", () => {
  it("should create an Avatar instance with a valid https URL", () => {
    const validAvatar = "https://example.com/avatar.png";
    const avatar = new Avatar(validAvatar);

    expect(avatar.value()).toBe(validAvatar);
  });

  it("should create an Avatar instance with a valid http URL", () => {
    const validAvatar = "http://example.com/avatar.png";
    const avatar = new Avatar(validAvatar);

    expect(avatar.value()).toBe(validAvatar);
  });

  it("should throw InvalidAvatarUrlError for an invalid URL string", () => {
    const invalidAvatar = "not-a-valid-url";

    const t = () => new Avatar(invalidAvatar);
    expect(t).toThrow(InvalidAvatarUrlError);
    expect(t).toThrow(`Invalid Avatar URL provided: not-a-valid-url`);
  });

  it("should throw InvalidAvatarUrlError for an empty string", () => {
    const t = () => new Avatar("");
    expect(t).toThrow(InvalidAvatarUrlError);
    expect(t).toThrow(`Invalid Avatar URL provided: `);
  });

  it("should accept URLs with query parameters and fragments", () => {
    const complexAvatar = "https://example.com/path/to/img.png?query=123#section";
    const avatar = new Avatar(complexAvatar);

    expect(avatar.value()).toBe(complexAvatar);
  });

  it("should reject URLs with unsupported protocols", () => {
    const invalidAvatar = "ftp://example.com/avatar.png";

    const t = () => new Avatar(invalidAvatar);
    expect(t).toThrow(InvalidAvatarUrlError);
    expect(t).toThrow(`Invalid Avatar URL provided: ftp://example.com/avatar.png`);
  });
});
