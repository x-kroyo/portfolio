import { userRepositoryPortContractTests } from "@/test/features/users/domain/ports/userRepositoryContractTests";
import { FakeUserRepository } from "./FakeUserRepository";

userRepositoryPortContractTests(() => new FakeUserRepository());
