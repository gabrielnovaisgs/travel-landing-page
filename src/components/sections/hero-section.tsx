import PrimaryButton from "@/components/primary-button";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";


export default function HeroSection() {
    return (
        <section id="hero-section" className="flex flex-col gap-4 items-center mt-2
        md:grid md:grid-cols-[1fr_2fr]  md:gap-0
        ">
            <div className="flex gap-4 items-center text-secondary py-2 px-4 rounded-full bg-white shadow w-fit
            md:col-start-1 md:justify-self-center
            ">
                <p>Explore the world!</p>
                <FontAwesomeIcon icon={faPlane} className=""></FontAwesomeIcon>
            </div>

            <h1 className="text-5xl font-bold font-header text-center
            md:col-start-1 md:text-left
            ">Travel <span className="text-secondary">top destination</span> of the world</h1>

            <Image src="/images/hero.svg" alt="travel image" width={500} height={500}
                className="object-contain h-3/4 w-3/4 
                md:col-start-2 md:row-end-5 md:row-start-1 md:justify-self-center md:self-center 
                md:w-full md:h-full

                "
            ></Image>
            <p className="font-light text-center
            md:col-start-1  md:text-left
            ">We always make our customer happy by providing as many choices as possible </p>
            <div className="md:col-start-1 md:justify-self-center">

                <PrimaryButton>
                    Get Started

                </PrimaryButton>

            </div>
        </section>
    )
}