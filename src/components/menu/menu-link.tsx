import Link from "next/link";
type Props = {
    children: React.ReactNode,
    href: string
}
export default function MenuLink({ children, href }: Props) {
    return (
        <Link className=" transition-all duration-300 relative px-1
        after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-0.5  after:rounded
        after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300
        after:bg-gradient-to-r after:from-20% after:from-secondary  after:via-primary after:to-80% after:to-secondary 
        hover:after:w-[110%] hover:-translate-y-0.5 hover:font-semibold
        " href={href}>{children}</Link>
    );
}