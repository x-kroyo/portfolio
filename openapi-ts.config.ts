const commonPlugins = (runtimeConfigPath: string) => [
    'zod',
    '@tanstack/react-query',
    {
      name: '@hey-api/client-axios',
      runtimeConfigPath: runtimeConfigPath, 
    },
    {
        name: '@hey-api/sdk',
        validator: true,
        transformer: true
    },
    {
        dates: true, 
        name: '@hey-api/transformers',
    },
];

export default [
    {
        input: 'src/features/users/infra/api/http/users.api.yaml',
        output: 'src/features/users/infra/api/http/generated',
        plugins: commonPlugins('@/src/features/users/infra/api/http/client.config')
    }
];