import { publicApiAxiosInstance } from "@/src/common/infra/http/publicApiAxiosInstance";
import { client, CreateClientConfig } from "@/src/features/users/infra/http/generated/client.gen";

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  axios: publicApiAxiosInstance,
});