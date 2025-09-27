import { DependencyList } from "react";
import { FunctionReturningPromise } from "./useAsync/types";
import { useAsync } from "./useAsync";
import { ErrorDetail } from "../errorhandling/ErrorDetail";
import { resolveErrorDetail } from "../errorhandling/resolveErrorDetail";

export default function useAsyncFnWithResolvedError<T extends FunctionReturningPromise>(
  fn: T,
  deps: DependencyList = []
) {
  const { value, loading, error } = useAsync(fn, deps);
  const errorDetail: ErrorDetail | undefined = error ? resolveErrorDetail(error) : undefined;
  return {
    value,
    loading,
    error: errorDetail,
  }
}