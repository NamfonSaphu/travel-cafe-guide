import ThemeToggle from "@/app/theme-toggle"
import Logo from "./Logo"
import Search from "./Search"
import DropdownListMenu from "./DropdownListMenu"

const Navbar = () => {
    return (
        <div className="container flex justify-between flex-col sm:flex-row sm:items-center gap-4 py-4">
            <Logo />
            <Search />
            <div className="flex gap-4">
                <ThemeToggle />
                <DropdownListMenu />
            </div>
        </div>
    )
}

export default Navbar
