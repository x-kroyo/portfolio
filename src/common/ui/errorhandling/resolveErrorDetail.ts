import { CommonErrorCodes } from "./CommonErrorCodes";
import { ErrorDetail } from "./ErrorDetail";

export function resolveErrorDetail(thrownError: Error): ErrorDetail {
  const isKnownError = thrownError instanceof Error && thrownError.constructor.name in exceptionsCodes;
  if (!isKnownError) {
    return { code: CommonErrorCodes.UNKNOWN_ERROR };
  }
  const errorName = thrownError.constructor.name;
  const code : CommonErrorCodes = exceptionsCodes[errorName];
  return { code };
}

const exceptionsCodes : Record<string, CommonErrorCodes> = {
  UserNotFoundError: CommonErrorCodes.USER_NOT_FOUND
}