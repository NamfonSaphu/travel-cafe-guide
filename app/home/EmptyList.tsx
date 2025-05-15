import { Button } from "@/components/ui/button"
import Link from "next/link"

const EmptyList = ({ heading = 'No items', btnText = 'Back home' }: { heading?: string, btnText?: string }) => {
    return (
        <div>
            <h1 className="text-xl font-bold">{heading}</h1>
            <Button className="capitalize" asChild>
                <Link href='/'>
                    {btnText}
                </Link>
            </Button>
        </div>
    )
}

export default EmptyList
