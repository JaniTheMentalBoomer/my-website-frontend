import { client } from '../lib/http/client'
import {
  ExamplesSchema,
  examplesSchema,
} from '../exampleFeature/example.schema'

export async function getExample(api: string): Promise<ExamplesSchema> {
  const url = new URL(`${api}/somewhere`)
  const result = await client(examplesSchema).get(url)
  return result
}
