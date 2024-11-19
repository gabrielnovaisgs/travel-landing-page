
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuLink from "./menu/menu-link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex md:items-center justify-between px-8 py-2 ">
            <div>Logo</div>
            <ul className="hidden md:flex gap-6">
                <MenuLink href="#">Home</MenuLink>
                <MenuLink href="#">Discover</MenuLink>
                <MenuLink href="#">Special Deals</MenuLink>
                <MenuLink href="#">Contact</MenuLink>
            </ul>
            <button className="md:hidden">
                <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
            <ul className="hidden md:flex gap-4 items-center">
                <MenuLink href="#">Login</MenuLink>
                <Link href="#"
                    className="bg-primary text-white rounded-full px-4 py-2 shadow-md
                    hover:bg-primary/90  transition-all duration-300"
                >Sign Up</Link>
            </ul>
        </header>
    );
}