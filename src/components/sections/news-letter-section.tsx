import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewsLetterSection() {
    return (
        <section>
            <div className="bg-[#FACD49]/20 p-9 rounded-3xl flex flex-col gap-4 items-center
            md:p-16
            ">
                <h3 className="text-xl text-center font-bold text-secondary font-header">subscribe to our newsletter</h3>
                <p className="font-bold text-2xl text-center">Prepare yourself & let’s explore the beauty of the world</p>
                <form action="" className="flex flex-col gap-2 w-full
                md:grid md:grid-cols-[2fr_1fr] ">
                    <label
                        className="w-full flex items-center gap-2 bg-white rounded-lg p-2 
                    border  border-primary/20 has-[:focus]:border-primary/50 has-[:focus]:shadow has-[:focus]:shadow-primary/50 transition-all">
                        <FontAwesomeIcon icon={faEnvelope} size="xl" className="text-primary"></FontAwesomeIcon>
                        <input type="email" placeholder="your@email.com"
                            className="w-full h-8 focus:outline-none" />
                    </label>
                    <input type="submit" className="p-2 rounded-lg bg-primary text-white font-header transition-all duration-300 hover:bg-primary/90 cursor-pointer" />

                </form>
            </div>
        </section>
    )
}