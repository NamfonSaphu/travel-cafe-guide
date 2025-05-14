import { LuHeart } from "react-icons/lu";
import { Button } from "../ui/button";

const FavoriteToggleButton = ({ landmarkId }: { landmarkId: string }) => {
    return (
        <Button size='icon'>
            <LuHeart />
        </Button>
    )
}

export default FavoriteToggleButton
