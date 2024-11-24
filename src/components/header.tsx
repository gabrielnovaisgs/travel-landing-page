
'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuLink from "./menu/menu-link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./mobile-header";
import PrimaryButton from "./primary-button";
import Image from "next/image";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    function toogleMenu() {
        setMenuOpen((prev) => !prev)
    }
    return (
        <header className="grid grid-cols-[1fr_3fr_1fr] fixed w-full
     items-center px-8 py-4 z-50 bg-white/20 backdrop-blur h-14 md:h-20">
            <div className="col-start-2 justify-self-center md:justify-self-start  md:col-start-1">
                <Image src={"/images/logo.svg"} width={100} height={100} alt="logo"></Image>
            </div>

            <ul className="
            justify-self-center
            hidden p-2 items-center 
            md:flex md:relative gap-6">
                <MenuLink href="#">Home</MenuLink>
                <MenuLink href="#">Discover</MenuLink>
                <MenuLink href="#">Special Deals</MenuLink>
                <MenuLink href="#">Contact</MenuLink>
            </ul>

            <ul className="hidden col-start-3 justify-self-end md:flex gap-4 items-center">
                <MenuLink href="#">Login</MenuLink>

                <PrimaryButton>
                    <Link href="#"
                        className=""
                    >Sign Up</Link>
                </PrimaryButton>
            </ul>
            <button onClick={toogleMenu} className="col-start-3 justify-self-end md:hidden">
                <FontAwesomeIcon icon={faBars} size="xl" className="text-primary font-bold" />
            </button>
            <MobileMenu menuState={menuOpen} toogleMenu={toogleMenu}></MobileMenu>
        </header>
    );
}