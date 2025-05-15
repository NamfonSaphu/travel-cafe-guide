import ThemeToggle from "@/app/theme-toggle"
import Logo from "./Logo"
import Search from "./Search"
import DropdownListMenu from "./DropdownListMenu"

const Navbar = () => {
    return (
<div className="container flex items-center justify-between gap-4 py-4 overflow-hidden">
  <Logo />
  
  <div className="flex-1 min-w-0">
    <Search />
  </div>

  <div className="flex gap-4 flex-shrink-0">
    <ThemeToggle />
    <DropdownListMenu />
  </div>
</div>

    )
}

export default Navbar
