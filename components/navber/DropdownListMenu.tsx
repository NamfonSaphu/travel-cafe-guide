import { TbAlignCenter } from "react-icons/tb";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import Link from "next/link";
import { links } from "@/utils/links";
import { SignOutButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const DropdownListMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild >
                <Button variant="outline">
                    <TbAlignCenter />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <SignedOut>
                    <DropdownMenuItem>
                        <SignInButton mode="modal">
                            <button>Login</button>
                        </SignInButton>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <SignUpButton mode="modal">
                            <button>Register</button>
                        </SignUpButton>
                    </DropdownMenuItem>
                </SignedOut>

                <SignedIn>
                    {
                        links.map((item, index) => (
                            <DropdownMenuItem key={index}>
                                <Link href={item.href}>{item.label}</Link>
                            </DropdownMenuItem>
                        ))
                    }
                    <DropdownMenuItem>
                        <SignOutButton>
                            <button>Sign out</button>
                        </SignOutButton>
                    </DropdownMenuItem>
                </SignedIn>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default DropdownListMenu;
