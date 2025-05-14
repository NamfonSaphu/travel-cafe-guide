import { z, ZodSchema } from 'zod'
import { provinces } from './provinces'

export const profileSchema = z.object({
    firstName: z.string().min(2, { message: "first name must contain at least 2 character" }),
    lastName: z.string().min(2, { message: "last name must contain at least 2 character" }),
    userName: z.string().min(2, { message: "username must contain at least 2 character" }),
})

const validatedImage = () => {
    const maxFileSize = 1024 * 1024
    return z.instanceof(File).refine((file) => {
        return file.size <= maxFileSize
    }, 'File size must be less than 1MB')
}

export const imageSchema = z.object({
    image: validatedImage()
})

export const landmarkSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must contain at least 2 character" })
    .max(30, { message: "Name must be less than 30 characters" }),
  category: z.string(),
  description: z
    .string()
    .min(2, { message: "Description must contain at least 2 character" })
    .max(200, { message: "Description must be less than 200 characters" }),
  price: z.coerce.number().int().min(0,{ message: 'Price must be greater than 0'}),
  province: z.string(),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
});

export const validatedWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
    const result = schema.safeParse(data)
    if (!result.success) {
        const errors = result.error?.errors.map((error) => error.message)
        throw new Error(errors.join(','))
    }
    return result.data
}
