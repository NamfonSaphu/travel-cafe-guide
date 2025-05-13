"use client"
import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"
import { LoaderCircle } from 'lucide-react';

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
                    ? <LoaderCircle className="animate-spin" />
                    : <p>{text}</p>
            }
        </Button>
    )
}