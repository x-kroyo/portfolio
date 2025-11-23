import { UserId } from "@/src/common/domain/valueobjects/UserId";
import { UserRepositoryPort } from "@/src/features/users/domain/ports/UserRepositoryPort";
import { expect, describe, it, beforeEach } from 'vitest'

export function userRepositoryPortContractTests(
  getUserRepository: () => UserRepositoryPort
) {

  describe("UserRepositoryPort Contract Tests", () => {
    let userRepository: UserRepositoryPort;
    
    beforeEach(() => {
      userRepository = getUserRepository();
    });

    it("returns null when user is not found", async () => {
      // When
      const nonExistentUserId = new UserId(89620);

      // When
      const user = await userRepository.findUserById(nonExistentUserId);

      // Then
      expect(user).toBeNull();
    });


  });
}