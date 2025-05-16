"use client"
import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"
import { LoaderCircle } from 'lucide-react';
import { SignInButton } from "@clerk/nextjs";
import { LuHeart } from "react-icons/lu";

type btnSize = 'default' | 'lg' | 'sm'

type SubmitButtonProps = {
    className?: string
    text?: string
    size?: btnSize
}

export const SubmitButton = ({ className, size, text }: SubmitButtonProps) => {
    const { pending } = useFormStatus()
    return (
        <Button
            disabled={pending}
            className={`${className} bg-gray-950 text-white hover:bg-gray-900`}
            size={size}
            type="submit"
        >
            {
                pending
                    ? <>
                        <LoaderCircle className="animate-spin" />
                        <span className="font-semibold">Please wait...</span>
                    </>
                    : <p className="font-semibold">{text}</p>
            }
        </Button>
    )
}


export const SignInCardButton = () => {
    return (
        <SignInButton mode='modal'>
            <Button size='icon'>
                <LuHeart />
            </Button>
        </SignInButton>

    )
}

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
    // console.log('is', isFavorite)
    const { pending } = useFormStatus()
    return (
        <Button type="submit" size='icon' className="bg-white">
            {
                pending
                    ? <LoaderCircle className="animate-spin" />
                    : isFavorite
                        ? <LuHeart fill="#be123c" stroke="#be123c"/>
                        : <LuHeart />
            }
        </Button>
    )
}