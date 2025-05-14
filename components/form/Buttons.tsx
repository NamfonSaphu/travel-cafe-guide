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
    //load
    const { pending } = useFormStatus()
    return (
        <Button disabled={pending} className={className} size={size} type="submit" >
            {
                pending
                    ? <>
                        <LoaderCircle className="animate-spin" />
                        <span>Please wait...</span>
                    </>
                    : <p>{text}</p>
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