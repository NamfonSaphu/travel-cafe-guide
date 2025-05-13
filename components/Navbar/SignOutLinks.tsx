'use client'
import { SignOutButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { toast } from "sonner"

const SignOutLinks = () => {

    const handleClick = () => {
        toast.success('Logout Successfully!')
    }
    return (
        <SignOutButton>
            <Button onClick={handleClick}>Logout</Button>
        </SignOutButton>
    )
}

export default SignOutLinks
