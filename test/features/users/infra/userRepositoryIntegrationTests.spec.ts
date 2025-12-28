import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node'
import { initializeInversifyContainer } from '@/src/common/infra/di';
import { UserRepositoryPortSymbol } from '@/src/features/users/domain/ports/UserRepositoryPort';
import { userRepositoryPortContractTests } from '@/test/features/users/domain/ports/userRepositoryContractTests';
import { QueryClient } from '@tanstack/react-query';
import { beforeAll, afterEach, afterAll } from 'vitest';

const baseUrl = process.env['NEXT_PUBLIC_API_BASE_URL'];

const handlers = [
  http.get<{ id: string }>(`${baseUrl}/users/:id`, () => {
    return new HttpResponse(null, { status: 404 });
  })
]

const server = setupServer(...handlers);
const container = initializeInversifyContainer();
const queryClient = container.get(QueryClient);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  queryClient.clear();
});
afterAll(() => server.close());

userRepositoryPortContractTests(() => container.get(UserRepositoryPortSymbol));
