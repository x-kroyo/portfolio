import { publicApiAxiosInstance } from "@/src/common/infra/http/publicApiAxiosInstance";
import { CreateClientConfig } from "@/src/features/users/infra/api/http/generated/client";

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  axios: publicApiAxiosInstance,
});