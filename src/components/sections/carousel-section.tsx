import Image from "next/image"
export default function CaroulselSection() {
    return (
        <div className="caorousel">
            <div className="list">
                <Image src={"/images/logos/logo_1.svg"} width={200} height={100} alt="Travel agency"></Image>
                <Image src={"/images/logos/logo_2.svg"} width={200} height={100} alt="Travel agency"></Image>
                <Image src={"/images/logos/logo_3.svg"} width={200} height={100} alt="Travel agency"></Image>
                <Image src={"/images/logos/logo_4.svg"} width={200} height={100} alt="Travel agency"></Image>
                <Image src={"/images/logos/logo_5.svg"} width={200} height={100} alt="Travel agency"></Image>
            </div>
        </div>
    )
}