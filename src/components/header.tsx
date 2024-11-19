
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuLink from "./menu/menu-link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between px-8 py-2">
            <div>Logo</div>
            <ul className="hidden md:flex gap-4">
                <MenuLink href="#">Home</MenuLink>
                <MenuLink href="#">Discover</MenuLink>
                <MenuLink href="#">Special Deals</MenuLink>
                <MenuLink href="#">Contact</MenuLink>
            </ul>
            <button className="md:hidden">
                <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
            <ul className="hidden md:flex gap-4">
                <MenuLink href="#">Login</MenuLink>
                <Link href="#">Sign Up</Link>
            </ul>
        </header>
    );
}