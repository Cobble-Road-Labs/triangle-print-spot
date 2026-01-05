import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ArrowLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function ArrowLink({ 
    href, 
    children,
    className = ''
}: ArrowLinkProps){
    return (
        <Link 
            href={href} 
            className={`inline-flex items-center gap-2 text-sm lg:text-base text-black font-semibold font-mono transition-all duration-300 hover:text-grey hover:gap-4 group ${className}`}
        >
            {children}
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20}/>
        </Link>
    )
}