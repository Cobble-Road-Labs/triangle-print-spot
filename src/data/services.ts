export interface Service {
  name: string;
  description: string;
  imageSrc: string;
  href: string;
}

export const services: Service[] = [
  {
    name: "Wide-format printing",
    description: "Perfect for large-scale prints like bottle stickers, banners, signs, and posters.",
    imageSrc: "/images/home/products/wide-format.png",
    href: "/services#wide-format-printing"
  },
  {
    name: "Business-tailored Printing",
    description: "Professional-quality prints for marketing collateral, stationery, and promotional materials.",
    imageSrc: "/images/home/products/business-printing.png",
    href: "/services#printing-solutions",
  },
  {
    name: "Digital Printing",
    description: "High-quality, versatile prints with vibrant colors, perfect for marketing materials and personal projects.",
    imageSrc: "/images/home/products/digital-printing.png",
    href: "/services#digital-printing",
  },
  {
    name: "T-Shirt Printing",
    description: "Customized apparel for events, promotions, or personal use.",
    imageSrc: "/images/home/products/t-shirt-printing.png",
    href: "/services#t-shirt-printing",
  },
  {
    name: "Sublimation Printing",
    description: "High-quality, durable prints on polyester-based products like t-shirts and mugs.",
    imageSrc: "/images/home/products/sublimation-printing.png",
    href: "/services#sublimation-printing",
  },
];
