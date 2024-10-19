import { CartSideBar } from "@/components/cart/sidebar"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"

export const Header = () => {
    return (
        <header className="flex justify-between items-center my-5 mx-3">
            <div className="flex items-center gap-3"><Logo /> <ThemeToggle /></div>
            <div>
                <CartSideBar />
            </div>
        </header>
    )
}