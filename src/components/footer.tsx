import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col px-8 py-8 items-center text-center gap-4 justify-center
        [&>ul>*:nth-child(1)]:font-bold [&>ul>*:nth-child(1)]:font-header [&>ul>*:nth-child(1)]:text-secondary 
         md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-start md:text-left
        ">

            <Image src="/images/logo.svg" alt="logo" width={100} height={100}
                className=" w-52 col-start-1 md:w-40 "
            ></Image>
            <p className="col-start-1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                in a piece of classical Latin literature from 45 BC.</p>
            <div className="flex gap-4 col-start-1 items-center justify-center md:justify-start">
                <FontAwesomeIcon className="text-2xl p-2 rounded-full bg-primary text-white text-center align-middle" icon={faFacebook}></FontAwesomeIcon>
                <FontAwesomeIcon className="text-2xl p-2 rounded-full bg-primary text-white text-center align-middle" icon={faInstagram}></FontAwesomeIcon>
                <FontAwesomeIcon className="text-2xl p-2 rounded-full bg-primary text-white text-center align-middle" icon={faTwitter}></FontAwesomeIcon>
            </div>

            <ul className=" row-start-1 md:flex flex-col gap-2  row-span-3 col-start-2">
                <li>Company</li>
                <li>About</li>
                <li>Carrear</li>
                <li>Mobile</li>
            </ul>
            <ul className=" row-start-1 md:flex flex-col gap-2  row-span-3 col-start-3">
                <li>Contact</li>
                <li>Why Travlog?</li>
                <li>Partner with us</li>
                <li>FAQ’s</li>
                <li>Blog</li>
            </ul>
            <ul className=" row-start-1 md:flex flex-col gap-2  row-span-3 col-start-4">
                <li>Meet Us</li>
                <li>+00 92 1234 56789</li>
                <li>info@travlog.com</li>
                <li>205. R Street, New York
                    BD23200</li>
            </ul>
        </footer>
    )
}