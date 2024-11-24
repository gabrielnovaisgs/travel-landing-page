export default function SectionTitle({ title, subTitle, className }: { title: string, subTitle: string, className?: string }) {
    return (
        <div className={`${className} flex flex-col gap-2`}>
            <h2 className="text-xl text-center font-bold text-secondary font-header
                md:col-start-1 md:text-left
            " > {title}</h2>
            <p className="font-bold text-2xl text-center
            md:col-start-1 md:text-left
            ">{subTitle}</p>
        </div>
    )
}