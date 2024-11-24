'use client'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRef } from "react";


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
        <section className="flex flex-col gap-4 items-center overflow-hidden">
            <h2 className="text-xl font-bold text-secondary font-header" > Services</h2>
            <p className="font-bold text-2xl text-center">Our top value categories for you</p>
            <div ref={carouselRef} className={` 
            
                relative h-60 w-full 
               
}
            [&>*:nth-child(1)]:-left-[200%] 
            [&>*:nth-child(2)]:left-1/2 [&>*:nth-child(2)]:translate-x-[calc(-110%-50%)]  
            [&>*:nth-child(3)]:left-1/2 [&>*:nth-child(3)]:translate-x-[-50%] [&>*:nth-child(3)]:translate-y-[-0.5rem]  
            [&>*:nth-child(3)]:shadow-lg [&>*:nth-child(3)]:shadow-primary/20 [&>*:nth-child(3)]:border-primary/20  [&>*:nth-child(3)]:opacity-100
            [&>*:nth-child(4)]:left-1/2 [&>*:nth-child(4)]:translate-x-[calc(110%-50%)] 
            [&>*:nth-child(n+5)]:left-[200%]   
            `}>
                {items.map((item, index) => (

                    <div key={index}
                        className={`
                 absolute h-60 w-56
                transition-all duration-500 
        py-8 px-12 flex flex-col border border-primary/10 translate-y-[0.5rem] bg-white opacity-60  text-center rounded-3xl `}>

                        <p className="font-bold font-header">{item.title}</p>
                        <p>{item.description}</p>
                    </div>


                ))}



            </div>
            <div className="flex gap-4 text-xl">
                <button
                    onClick={() => gotToElement('prev')}
                    className="w-16  h-16 flex justify-center items-center border rounded-full bg-white"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
                <button
                    onClick={() => gotToElement('next')}
                    className="w-16 h-16 flex justify-center items-center border rounded-full bg-primary text-white"><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </section>
    )
}