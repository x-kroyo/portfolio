import { DependencyList } from "react";
import { ErrorDetail } from "@/src/common/ui/errorhandling/ErrorDetail";
import { resolveErrorDetail } from "@/src/common/ui/errorhandling/resolveErrorDetail";
import { FunctionReturningPromise } from "react-use/lib/misc/types";
import { useAsync } from "react-use";

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