import { Button } from "../ui/button"
import Link from "next/link"

const Logo = () => {
    return (
        <Button variant="ghost" asChild>
            <Link href='/' className="text-2xl font-semibold">Review</Link>
        </Button>
    )
}
export default Logo
