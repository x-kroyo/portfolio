import { userRepositoryPortContractTests } from "../../domain/ports/userRepositoryContractTests";
import { FakeUserRepository } from "./FakeUserRepository";

userRepositoryPortContractTests(() => new FakeUserRepository());