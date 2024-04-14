import { z } from 'zod'

export const exampleSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
})

export const examplesSchema = z.array(exampleSchema)

export type ExampleSchema = z.infer<typeof exampleSchema>
export type ExamplesSchema = z.infer<typeof examplesSchema>
