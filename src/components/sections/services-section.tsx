'use client'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRef } from "react";
import SectionTitle from "../section-title";


export default function ServicesSection() {

    const items: { description: string, title: string }[] = [
        {
            description: "Square, was moving across the sand in their direction.",
            title: "Easy Booking"
        },
        {
            description: "Text 2",
            title: "Easy Booking"
        },
        {
            description: "Text 3",
            title: "Easy Booking"
        },
        {
            description: "Text 4",
            title: "Easy Booking"
        },
        {
            description: "Text 5",
            title: "Easy Booking"
        }
    ]

    const carouselRef = useRef<HTMLDivElement>(null)

    function gotToElement(type: 'next' | 'prev') {
        if (!carouselRef.current) return
        if (type === 'next') {
            const firstElement = carouselRef.current.children[0]
            carouselRef.current.appendChild(firstElement)

        } else {
            const lastElement = carouselRef.current.children[carouselRef.current.children.length - 1]
            carouselRef.current.prepend(lastElement)
        }


    }
    return (
        <section className="flex flex-col gap-4 items-center overflow-hidden my-8
            md:grid md:grid-cols-[1fr_2fr] md:items-center md:gap-2 md:justify-between">
            <SectionTitle className="md:col-start-1" title="Services" subTitle="Our top value categories for you">

            </SectionTitle>

            <div ref={carouselRef} className={` 
            
                relative h-64 w-full 
         
}
            [&>*:nth-child(1)]:-left-[200%] 
            [&>*:nth-child(2)]:left-1/2 [&>*:nth-child(2)]:translate-x-[calc(-110%-50%)]  
            [&>*:nth-child(3)]:left-1/2 [&>*:nth-child(3)]:translate-x-[-50%] [&>*:nth-child(3)]:translate-y-[-0.5rem]  
            [&>*:nth-child(3)]:shadow-lg [&>*:nth-child(3)]:shadow-primary/20 [&>*:nth-child(3)]:border-primary/20  [&>*:nth-child(3)]:opacity-100
            [&>*:nth-child(4)]:left-1/2 [&>*:nth-child(4)]:translate-x-[calc(110%-50%)] 
            [&>*:nth-child(n+5)]:left-[200%]   

            md:col-start-2 md:row-start-1 md:overflow-hidden
            `}>
                {items.map((item, index) => (

                    <div key={index}
                        className={`
                 absolute h-60 w-56 top-2
                transition-all duration-500 
        py-8 px-12 flex flex-col border border-primary/10 translate-y-[0.5rem] bg-white opacity-60  text-center rounded-3xl `}>

                        <p className="font-bold font-header">{item.title}</p>
                        <p>{item.description}</p>
                    </div>


                ))}



            </div>
            <div className="flex gap-4  text-xl justify-center md:col-start-2">
                <button
                    onClick={() => gotToElement('prev')}
                    className="w-16  h-16 flex justify-center items-center border rounded-full bg-white transition-all active:bg-slate-100"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
                <button
                    onClick={() => gotToElement('next')}
                    className="w-16 h-16 flex justify-center items-center border rounded-full bg-primary text-white active:bg-primary/90 transition-all"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </section>
    )
}