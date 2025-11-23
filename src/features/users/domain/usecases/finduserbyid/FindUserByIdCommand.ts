import { UserId } from "@/src/common/domain/valueobjects/UserId";

type FindUserByIdCommand = {
  readonly userId: UserId;
};

export default FindUserByIdCommand;