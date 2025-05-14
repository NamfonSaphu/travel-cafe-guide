"use server"
import { imageSchema, landmarkSchema, profileSchema, validatedWithZod } from "@/utils/schema"
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import db from '@/utils/db'
import { redirect } from "next/navigation"
import { promise, string } from "zod"
import { uploadFile } from "@/utils/supabase"
import { revalidatePath } from "next/cache"

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
        const validateField = validatedWithZod(landmarkSchema, rawData)
        const fullPath = await uploadFile(validatedFile.image)
        console.log(fullPath)

        await db.landmark.create({
            data: {
                ...validateField,
                image: fullPath,
                profileId: user.id,
            },
        });
    } catch (error) {
        return renderError(error)
    }
    redirect('/')
}

export const fetchLandmarks = async () => {
    const landmarks = await db.landmark.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return landmarks
}

export const fetchFavoriteId = async ({ landmarkId }: { landmarkId: string }) => {
    const user = await getAuthUser()
    const favorite = await db.favorite.findFirst({
        where: {
            landmarkId: landmarkId,
            profileId: user.id
        },
        select: {
            id: true
        }
    })
    return favorite?.id || null
}

export const toggleFavoriteAction = async (prevState: {
    favoriteId: string | null
    landmarkId: string
    pathname: string
}) => {
    const { favoriteId, landmarkId, pathname } = prevState
    const user = await getAuthUser()
    try {
        if (favoriteId) {
            await db.favorite.delete({
                where: {
                    id: favoriteId
                }
            })
        } else {
            await db.favorite.create({
                data: {
                    landmarkId: landmarkId,
                    profileId: user.id,
                }
            })
        }
        revalidatePath(pathname)
        return { message: favoriteId ? 'Removed Favorite Success!!!' : 'Add Favorite Success!!!' }
    } catch (error) {
        return renderError(error)
    }
    return { message: 'Add Favorite' }
}