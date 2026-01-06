import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  imageSrc: string;
  href: string;
}

export default function ProductCard({
  name,
  description,
  imageSrc,
  href,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col h-full rounded-2xl shadow-lg shadow-black/20 border border-grey/50 p-3 gap-3 md:p-3.5 md:gap-3.5 lg:p-4 lg:gap-4 transition-all duration-300 hover:scale-105 hover:bg-red/5 group"
    >
      <div className="aspect-square relative overflow-hidden w-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col items-start gap-3 md:gap-3.5 lg:gap-4">
        <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl capitalize">
          {name}
        </h3>
        <p className="font-mono font-normal text-xs md:text-sm lg:text-base">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-sm lg:text-base text-black font-semibold font-mono transition-all duration-300 group-hover:text-grey group-hover:gap-4">
          Learn more
          <ArrowRight
            className="transition-transform duration-300 group-hover:translate-x-1"
            size={20}
          />
        </span>
      </div>
    </Link>
  );
}
