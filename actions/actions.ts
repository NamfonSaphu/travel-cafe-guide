"use server"
import { imageSchema, profileSchema, validatedWithZod } from "@/utils/schema"
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import db from '@/utils/db'
import { redirect } from "next/navigation"
import { promise } from "zod"

const getAuthUser = async () => {
    const user = await currentUser()
    if (!user) {
        throw new Error('You must logged!!!')
    }
    if (!user.privateMetadata.hasProfile) redirect('/profile/create')
    return user
}

const renderError = (error: unknown): { message: string } => {
    return {
        message: error instanceof Error ? error.message : 'An Error!!!'
    }
}

export const createProfileAction = async (prevState: any, formData: FormData): Promise<{ message: string }> => {
    try {
        const user = await currentUser()
        if (!user) throw new Error('Please Login!!!')
        const rawData = Object.fromEntries(formData)
        const validateField = validatedWithZod(profileSchema, rawData)
        console.log(rawData)

        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? ',',
                ...validateField
            }
        })

        const client = await clerkClient()
        await client.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true
            }
        })

    } catch (error) {
        return renderError(error)
    }
    redirect('/')
}

export const createPLandmarkAction = async (prevState: any, formData: FormData) => {
    try {
        const user = await getAuthUser()
        const rawData = Object.fromEntries(formData)
        const file = formData.get('image') as File

        const validatedFile = validatedWithZod(imageSchema, { image: file })
        console.log("validated", validatedFile)

        return { message: "Create Landmark Success!!!" }
    } catch (error) {
        return renderError(error)
    }

} 