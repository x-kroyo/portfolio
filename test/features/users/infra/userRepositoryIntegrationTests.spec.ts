import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node'
import { userRepositoryPortContractTests } from '../domain/ports/userRepositoryContractTests';
import { UserRepository } from '@/src/features/users/infra/adapters/UserRepository';
import { beforeAll, afterEach, afterAll } from 'vitest';

const baseUrl = process.env['NEXT_PUBLIC_API_BASE_URL'];

const handlers = [
  http.get<{ id: string }>(`${baseUrl}/users/:id`, () => {
    return new HttpResponse(null, { status: 404 });
  })
]

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

userRepositoryPortContractTests(() => new UserRepository());