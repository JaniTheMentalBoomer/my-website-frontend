import { z } from 'zod'

import { FetchError } from './error'

/**
 * @link https://github.com/mattpocock/zod-fetch
 */

type Schema<TData> = { parse: (data: unknown) => TData }
type FetchParameters = Parameters<typeof fetch>
type FetchMethods = 'get' | 'post' | 'put' | 'patch' | 'delete'

type ZodFetchMethods = <TData>(
  schema?: Schema<TData>,
  env?: string
) => Record<FetchMethods, (...args: FetchParameters) => Promise<TData>>

function normalizeInput(input: FetchParameters[0]) {
  if (typeof input === 'string' && input !== '') {
    return input
  }

  if (input instanceof URL) {
    return input.toString()
  }

  if (input instanceof Request) {
    return input.url
  }

  throw new Error('Invalid URL')
}

async function defaultFetch(
  input: FetchParameters[0],
  init: FetchParameters[1]
) {
  const { headers, ...rest } = init ?? {}

  const url = normalizeInput(input)
  const response = await fetch(url, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...headers,
    },
  })

  if (!response.ok) {
    throw new FetchError(
      `Request failed with status ${response.status}`,
      response
    )
  }

  if (!response.headers.get('content-type')?.includes('application/json')) {
    throw new FetchError(`Invalid content-type`, response)
  }

  return response.json()
}

async function typesafeFetch<TData>(
  schema: Schema<TData>,
  env?: string,
  ...args: FetchParameters
) {
  const response = await defaultFetch(...args)

  try {
    schema.parse(response)
  } catch (err) {
    throw err
  }
  return response
}

function createFetcher(): ZodFetchMethods {
  return (schema = z.any(), env?: string) => ({
    get: async (input, init) =>
      typesafeFetch(schema, env, input, { ...init, method: 'GET' }),
    post: async (input, init) =>
      typesafeFetch(schema, env, input, { ...init, method: 'POST' }),
    put: async (input, init) =>
      typesafeFetch(schema, env, input, { ...init, method: 'PUT' }),
    patch: async (input, init) =>
      typesafeFetch(schema, env, input, { ...init, method: 'PATCH' }),
    delete: async (input, init) =>
      typesafeFetch(schema, env, input, { ...init, method: 'DELETE' }),
  })
}

export const client = createFetcher()
