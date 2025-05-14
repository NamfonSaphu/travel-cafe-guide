import { LuHeart } from "react-icons/lu";
import { Button } from "../ui/button";
import { auth } from '@clerk/nextjs/server'
import { SignInCardButton } from "../form/Buttons";

const FavoriteToggleButton = async ({ landmarkId }: { landmarkId: string }) => {
    const { userId } = await auth()
    if (!userId) return <SignInCardButton />
    return (
        <Button size='icon'>
            <LuHeart />
        </Button>
    )
}

export default FavoriteToggleButton
