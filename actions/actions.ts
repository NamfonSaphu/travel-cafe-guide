"use server"
import { profileSchema, validatedWithZod } from "@/utils/schema"
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import db from '@/utils/db'
import { redirect } from "next/navigation"

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

export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
        const user = await currentUser()
        if(!user) throw new Error('Please Login!!!')
        const rawData = Object.fromEntries(formData)
        const validateField = validatedWithZod(profileSchema, rawData)

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