"use server"
import { profileSchema, validatedWithZod } from "@/utils/schema"

const renderError = (error: unknown): { message: string } => {
    return {
        message: error instanceof Error ? error.message : 'An Error!!!'
    }
}

export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
        const rawData = Object.fromEntries(formData)
        const validateField = validatedWithZod(profileSchema, rawData)
        console.log(validateField)
        return { message: 'Create Profile Success!!!' }
    } catch (error) {
        console.log(error)
        return renderError(error)
    }

}