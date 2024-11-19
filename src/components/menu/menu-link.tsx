import Link from "next/link";
type Props = {
    children: React.ReactNode,
    href: string
}
export default function MenuLink({ children, href }: Props) {
    return (
        <Link className="" href={href}>{children}</Link>
    );
}