import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SectionTitle from "../section-title"
import Image from "next/image"
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar"
export default function TopDestinationsSection() {

    const destinations = [
        {
            url: "/images/destinations/image-1.png",
            title: "Paradise Beach, Bantayan Island",
            location: "Rome, Italy",
            price: 550.16,
            rating: 4.8
        },
        {
            url: "/images/destinations/image-2.png",
            title: "Ocean with full of Colors",
            location: "Maldives",
            price: 451.16,
            rating: 4.7
        },
        {
            url: "/images/destinations/image-3.png",
            title: "Mountain View, Above the cloud",
            location: "United Arab Emeries",
            price: 235.16,
            rating: 4.9
        }
    ]

    return (
        <section id="top-destinations-section" className="my-8 overflow-hidden">
            <SectionTitle title="Top Destinations" subTitle="Explore top destinations"></SectionTitle>
            <div className="my-8 p-2 flex flex-row gap-4 overflow-x-scroll 
            md:overflow-auto md:justify-center">
                {destinations.map((destination, index) => (
                    <div key={index} className="grid grid-cols-[2fr_auto] min-w-[250px] 
                    shadow rounded-3xl

                    md:w-[150px] 
                    ">

                        <Image alt={destination.title} src={destination.url} width={250} height={250}
                            className="object-cover w-full h-full  col-span-2
                            md:w-full md:h-auto
                            "
                        ></Image>


                        <p className="mx-2 mt-1 col-start-1 font-header font-bold">{destination.title}</p>
                        <p className="mx-2 mt-1 col-start-2 font-header font-bold text-secondary ">{destination.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                        <p className="mx-2  col-start-1 font-light text-sm">{destination.location}</p>
                        <p className="mx-2 my-2 col-start-1 font-bold  text-[#FF5722]">{destination.rating} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> </p>
                    </div>
                ))}


            </div>
        </section>
    )
}