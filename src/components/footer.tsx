import Link from "next/link"
import { Separator } from "./ui/separator"

export const Footer = () => {
    return (
        <footer className="mt-5">
            <Separator />
            <div className="my-5 text-center text-sm opacity-50 mr-1">Criado por 
                <Link target="_blank" href="https://www.linkedin.com/in/antonio-rafael-37266620a/"> Rafael Andrade</Link>
            </div>
        </footer>
    )
}