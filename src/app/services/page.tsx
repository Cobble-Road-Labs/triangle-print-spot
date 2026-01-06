import Image from 'next/image';
import { Building2, Printer, Gift, Wallpaper, BookOpen, Handbag, FileText } from 'lucide-react';
import Button from '@/components/Button';

const BusinessPrintingServices = ["Compliment slips", "Order books", "Business cards", "Job and clock cards", "School diaries", "Flyers", "Invoice books", "Menus", "Quotation books", "Letterheads"];
const PersonalPrintingServices = ["Student Cards", "License Disk Stickers", "Funeral Programs", "Printing on Envelopes", "Wedding Invitations", "Price Tags", "Stickers", "Tent Calendars", "Colour prints", "Wall mounted calendars"];
const SublimationProducts = ["Mugs", "T-shirts", "Polymer Keyrings", "Wallets", "Two-tone mugs", "Plates", "Colour Changing Mugs"];
const WideFormatProducts = ["Personalized Stickers", "Bottle Stickers", "Packaging Stickers", "Cut out stickers", "ABS Board & Sticker", "Correx Board & Sticker", "Chromadek Board & Sticker", "PVC Banners"];
const DigitalPrintingProducts = ["Flyers", "Brochures", "Posters", "Business Cards", "Marketing Materials"];
const MerchandiseProducts = ["Paper bags", "Keyrings", "Plastic bags", "Button badges", "Pens", "Caps"];
const DocumentManagementServices = ["Laminating", "Wire 'o' Binding", "Email", "Fax (send/receive)", "Scanning", "Folding", "Cutting", "Comb Binding", "Full Colour Copies (A4/A3)"];

export default function Services() {
    return (
        <div className="min-h-screen flex flex-col items-center p-4">
            <main className="flex flex-col items-center gap-16 md:gap-21 lg:gap-24 w-full max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-60px)] lg:max-w-[1248px]">
                {/*Hero section*/}
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative mt-24">
                    <div className="flex flex-col gap-4 items-start flex-1 relative z-1">
                        <h1 className=" capitalize font-heading font-black text-[40px] md:text-5xl lg:text-[64px] leading-tight">Exceptional printing services in the Vaal Triangle</h1>
                        <p className="font-mono text-base lg:text-lg">Experience top-quality printing services with exceptional customer service in the Vanderbijlpark and Vaal Triangle area.</p>
                        <div className="flex flex-row flex-wrap gap-3 md:gap-3.5 lg:gap-4">
                          <Button href="/contact" variant="primary">Request Quote</Button>
                        </div>
                    </div>
                    <div className="flex-1 aspect-3/4 relative z-1 w-full">
                        <Image src="/images/services/hero.png" alt="A bottle of body wash with a squeeze cap placed beside a rock on a blank background." fill className="object-contain"/>
                    </div>
                    <div className="aspect-square bg-red w-[600] lg:w-[720] blur-[250px] opacity-80 rounded-full absolute -right-50 lg:right-0"></div>
                </section>
                <section className="z-3" id="printing-solutions">
                  <div className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center">
                    <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1">
                      <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl capitalize">Discover our versatile printing solutions</h2>
                      <p className="font-mono text-xs md:text-sm lg:text-base">From professional essentials to personal projects, we offer a wide range of customized printing services designed to meet your needs. Trust us to bring your ideas to life with precision and quality craftsmanship.</p>
                    </div>
                    <div className="aspect-4/3 overflow-hidden flex-1 relative">
                      <Image src="/images/home/services.png" alt="A collection of Triangle Print Spot designed business stationery and cards arranged on a blank background." fill/>
                    </div>
                  </div>
                  <div className="flex flex-col md:grid grid-cols-2 grid-rows-1 gap-4 md:gap-5 lg:gap-6">
                    <div className='flex flex-col gap-4 md:gap-5 lg:gap-6'>
                        <div className='relative rounded-2xl overflow-hidden aspect-4/3 w-full'>
                            <Image src="/images/services/business-card-services-img.png" alt="Business cards featuring a red and white design placed on a textured rock surface, showcasing a unique presentation style." fill className="object-contain"/>
                        </div>
                        <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-left">Business Printing Services</h3>
                        <div className='grid grid-cols-2 gap-3 md:gap-3.5 lg:gap-4 w-full'>
                            {BusinessPrintingServices.map((service, index) => (
                              <div className='flex gap-4' key={service}>
                                <Building2 className='text-red w-6 h-6 shrink-0'/>
                                <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-left">{service}</p>
                              </div>
                            ))}
                            
                        </div>
                        <Button href="/contact" variant="primary">Request Quote</Button>
                    </div>
                    <div className='flex flex-col gap-4 md:gap-5 lg:gap-6'>
                        <div className='relative rounded-2xl overflow-hidden aspect-4/3 w-full'>
                            <Image src="/images/services/calendar-img.png" alt="A folded paper calendar featuring a striking red and black design, showcasing its unique and modern aesthetic." fill className="object-contain"/>
                        </div>
                        <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-left">Personal & Miscellaneous Printing</h3>
                        <div className='grid grid-cols-2 gap-3 md:gap-3.5 lg:gap-4 w-full'>
                            {PersonalPrintingServices.map((service, index) => (
                              <div className='flex gap-4' key={service}>
                                <Printer className='text-red w-6 h-6 shrink-0'/>
                                <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-left">{service}</p>
                              </div>
                            ))}
                        </div>
                        <Button href="/contact" variant="primary">Request Quote</Button>
                    </div>
                  </div>
                </section>
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative" id="sublimation-printing">
                  <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                      <Image src="/images/services/sublimation.png" alt="A coffee mug featuring the logo of Triangle Print Spot, showcasing a sleek design and vibrant branding." fill className="object-contain"/>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1 items-start">
                      <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">Sublimation Printing</p>
                      <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl">Vibrant Designs that last</h2>
                      <p className="font-mono font-normal text-xs md:text-sm lg:text-base">
                          With sublimation printing, your designs become part of the fabric, offering vibrant, long-lasting results that won’t fade or crack. It’s the perfect solution for personalized products that stand out.
                      </p>
                      
                      <div className='grid grid-cols-2 gap-3 md:gap-3.5 lg:gap-4 w-full'>
                          {SublimationProducts.map((service, index) => (
                            <div className='flex gap-4' key={service}>
                              <Gift className='text-red w-6 h-6 shrink-0'/>
                              <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-left">{service}</p>
                            </div>
                          ))}
                      </div>
                      <Button href="/contact" variant="primary">Request Quote</Button>
                  </div>
                </section>
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative" id="wide-format-printing">
                  <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1 items-start">
                      <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">Wide Format Printing</p>
                      <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl capitalize">bold and impactful</h2>
                      <p className="font-mono font-normal text-xs md:text-sm lg:text-base">
                          Make a big impression with our wide format printing. We use top-quality technology to print on materials like vinyl, PVC, and canvas, ideal for large signs, banners, and posters that stand out.
                      </p>
                      <div className='grid grid-cols-2 gap-3 md:gap-3.5 lg:gap-4 w-full'>
                          {WideFormatProducts.map((service, index) => (
                            <div className='flex gap-4' key={service}>
                              <Wallpaper className='text-red w-6 h-6 shrink-0'/>
                              <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-left">{service}</p>
                            </div>
                          ))}
                      </div>
                      <Button href="/contact" variant="primary">Request Quote</Button>
                  </div>
                  <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                      <Image src="/images/services/wide-format.png" alt="A wooden plate holds two stylish bottles of beard oil, highlighting their craftsmanship and appealing packaging." fill className="object-contain"/>
                  </div>
                </section>
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative" id="digital-printing">
                  <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                      <Image src="/images/services/digital-printing.png" alt="A coffee cup against a red background featuring the text 'Your One Stop Print Shop' for Triangle Print Spot flyer." fill className="object-contain"/>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1 items-start">
                      <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">Digital Printing</p>
                      <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl capitalize">Vibrant & Versatile</h2>
                      <p className="font-mono font-normal text-xs md:text-sm lg:text-base">
                          Experience high-quality, full-color prints with our digital printing services. Perfect for everything from professional documents to promotional materials, we deliver exceptional results that stand out.
                      </p>
                      <div className='grid grid-cols-2 gap-3 md:gap-3.5 lg:gap-4 w-full'>
                          {DigitalPrintingProducts.map((service, index) => (
                            <div className='flex gap-4' key={service}>
                              <BookOpen className='text-red w-6 h-6 shrink-0'/>
                              <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-left">{service}</p>
                            </div>
                          ))}
                      </div>
                      <Button href="/contact" variant="primary">Request Quote</Button>
                  </div>
                </section>
                <section className='flex flex-col gap-4 md:gap-5 lg:gap-6 w-full' id="t-shirt-printing">
                  <div className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative">
                    <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1 items-start">
                      <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">T-shirt Printing</p>
                      <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl capitalize">Unleash Your Creativity with Custom T-Shirt Printing</h2>
                      <p className="font-mono font-normal text-xs md:text-sm lg:text-base">
                          Bring your unique designs to life with our custom t-shirt printing services. Whether it's bold statements or intricate artwork, we’ll transform your vision into vibrant, high-quality prints.
                      </p>
                      <Button href="/contact" variant="primary">Request Quote</Button>
                    </div>
                    <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                      <Image src="/images/services/t-shirt-main.png" alt="A white t-shirt displaying a red triangle and mountain motif, combining minimalist design with an adventurous spirit." fill className="object-cover"/>
                    </div>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6'>
                    <div className='flex flex-col gap-3 md:gap-3.5 lg:gap-4'>
                      <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                        <Image src="/images/services/t-shirt-vinyl.png" alt="A bright red t-shirt displaying a red triangle and mountain motifon a white vinyl print, combining minimalist design with an adventurous spirit." fill className="object-cover"/>
                      </div>
                      <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-left">Vinyl Cut-outs</h3>
                      <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Precision and durability for intricate logos and text.</p>
                    </div>
                    <div className='flex flex-col gap-3 md:gap-3.5 lg:gap-4'>
                      <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                        <Image src="/images/services/t-shirt-dark.png" alt="A maroon t-shirt displaying a red triangle and mountain motif, combining minimalist design with an adventurous spirit." fill className="object-cover"/>
                      </div>
                      <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-left">Dark Shirt Printing</h3>
                      <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Vivid, full-color designs that stand out on dark fabrics.</p>
                    </div>
                    <div className='flex flex-col gap-3 md:gap-3.5 lg:gap-4'>
                      <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                        <Image src="/images/services/t-shirt-white.png" alt="A white t-shirt displaying a red triangle and mountain motif, combining minimalist design with an adventurous spirit" fill className="object-cover"/>
                      </div>
                      <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-left">White Shirt Printing</h3>
                      <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Crisp, vibrant prints that pop on white fabrics.</p>
                    </div>
                  </div>
                </section>
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 relative w-full items-start" id="merchandise-and-document-management">
                  <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 flex-1">
                    <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                      <Image src="/images/services/merchandise-printing.png" alt="A sticker with red, white, grey and black mesh gradient background with the Triangle Print Spot logo on a white paper, featuring their address and the words, 'Your One Stop Print Shop'" fill className="object-cover"/>
                    </div>
                    <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">Merchandise printing</p>
                    <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl capitalize">Elevate Your Brand with Custom Merchandise</h2>
                    <div className='grid grid-cols-2 gap-3 md:gap-3.5 lg:gap-4'>
                      {MerchandiseProducts.map((service, index) => (
                        <div className='flex gap-4' key={service}>
                          <Handbag className='text-red w-6 h-6 shrink-0'/>
                          <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-left">{service}</p>
                        </div>
                      ))}
                    </div>
                    <Button href="/contact" variant="primary">Request Quote</Button>
                  </div>
                  <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 flex-1">
                    <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                      <Image src="/images/services/document-management.png" alt="A ring-bound book with a red cover featuring a mug image, set against a plain grey background." fill className="object-contain"/>
                    </div>
                    <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">Document management & finishing services</p>
                    <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl capitalize">Precision and Perfection in Every Detail</h2>
                    <div className='grid grid-cols-2 gap-3 md:gap-3.5 lg:gap-4'>
                      {DocumentManagementServices.map((service, index) => (
                        <div className='flex gap-4' key={service}>
                          <FileText className='text-red w-6 h-6 shrink-0'/>
                          <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-left">{service}</p>
                        </div>
                      ))}
                    </div>
                    <Button href="/contact" variant="primary">Request Quote</Button>
                  </div>
                </section>
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative" id="print-on-demand">
                  <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1 items-start">
                      <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">Print-on-demand</p>
                      <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl capitalize">Fast and convenient custom printing</h2>
                      <p className="font-mono font-normal text-xs md:text-sm lg:text-base">
                          Get exactly what you need with our print-on-demand service. Whether your designs are on a flash drive, CD, or email, just send us the files, and we’ll print them quickly and with top quality.
                      </p>
                      <Button href="https://maps.app.goo.gl/jLGSKqUcRo2mkRXi8" variant="primary">Visit us in store</Button>
                  </div>
                  <div className="flex-1 relative aspect-square rounded-2xl overflow-hidden w-full">
                      <Image src="/images/services/print-on-demand.png" alt="A small printer with a paper loaded in the top. A soft red light is shone on the printer giving it a light red hue." fill className="object-contain"/>
                  </div>
                </section>
            </main>
        </div>
    )
}