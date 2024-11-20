
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuLink from "./menu/menu-link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


interface Props {
    menuState: boolean
    toogleMenu: () => void
}
export default function MobileMenu({ menuState, toogleMenu }: Props) {

    return (
        <div className="flex 
     md:hidden     
     ">
            <div className={`${menuState ? "pointer-events-auto bg-primary/20" : "pointer-events-none opacity-0 "} left-0 absolute  -top-2 
            w-screen h-screen  shadow-md backdrop-blur-sm duration-500
            -z-10 `}
                onClick={toogleMenu}
            >

            </div>
            <div className={`flex flex-col justify-between py-8 px-4 items-center fixed 
            h-[calc(100dvh-1rem)] top-2  w-3/4  shadow-md rounded-l-3xl bg-white
            transition-all duration-500 ease-in-out
            ${menuState ? "right-0" : "-right-full"}
            
           
            `}>
                <div className="grid grid-cols-3 items-center w-full ">
                    <p className="col-start-2 justify-self-center">Logo</p>

                    <button onClick={toogleMenu} className="col-start-3 justify-self-end text-primary">
                        <FontAwesomeIcon icon={faArrowRight} size="xl"></FontAwesomeIcon>
                    </button>

                </div>
                <ul className="
             flex flex-col   
             p-2 items-center 
            md:flex md:relative gap-6">
                    <MenuLink href="#">Home</MenuLink>
                    <MenuLink href="#">Discover</MenuLink>
                    <MenuLink href="#">Special Deals</MenuLink>
                    <MenuLink href="#">Contact</MenuLink>


                </ul>
                <ul className="flex justify-evenly w-full items-center ">
                    <MenuLink href="#">Login</MenuLink>
                    <Link href="#"
                        className="bg-primary text-white rounded-full px-4 py-2 shadow-md
                    hover:bg-primary/90  transition-all duration-300"
                    >Sign Up</Link>
                </ul>
            </div>
        </div >

    );
}