import Image from "next/image"
import style from "./carousel.module.css"

export default function CaroulselSection() {
    return (
        <div className={`${style.carousel} w-full overflow-hidden my-8`}>
            <div className="list flex gap-6 items-center relative h-[100px] w-[calc(200px*5)]">
                <Image className={`${style.image}`} style={{ "--position": 1 } as React.CSSProperties} src={"/images/logos/logo-1.svg"} width={200} height={100} alt="Travel agency"></Image>
                <Image className={`${style.image}`} style={{ "--position": 2 } as React.CSSProperties} src={"/images/logos/logo-2.svg"} width={200} height={100} alt="Travel agency"></Image>
                <Image className={`${style.image}`} style={{ "--position": 3 } as React.CSSProperties} src={"/images/logos/logo-3.svg"} width={200} height={100} alt="Travel agency"></Image>
                <Image className={`${style.image}`} style={{ "--position": 4 } as React.CSSProperties} src={"/images/logos/logo-4.svg"} width={200} height={100} alt="Travel agency"></Image>
                <Image className={`${style.image}`} style={{ "--position": 5 } as React.CSSProperties} src={"/images/logos/logo-5.svg"} width={200} height={100} alt="Travel agency"></Image>
            </div>
        </div>
    )
}