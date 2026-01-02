import Image from 'next/image';
import { Building2, Printer, Gift, Wallpaper, BookOpen, Handbag, FileText } from 'lucide-react';

const BusinessPrintingServices = ["Compliment slips", "Order books", "Business cards", "Job and clock cards", "School diaries", "Flyers", "Invoice books", "Menus", "Quotation books", "Letterheads"];
const PersonalPrintingServices = ["Student Cards", "License Disk Stickers", "Funeral Programs", "Printing on Envelopes", "Wedding Invitations", "Price Tags", "Stickers", "Tent Calendars", "Colour prints", "Wall mounted calendars"];
const SublimationProducts = ["Mugs", "T-shirts", "Polymer Keyrings", "Wallets", "Two-tone mugs", "Plates", "Colour Changing Mugs"];
const WideFormatProducts = ["personalized stickers", "Bottle Stickers", "Packaging Stickers", "Cut out stickers", "ABS Board & Sticker", "Correx Board & Sticker", "Chromadek Board & Sticker", "PVC Banners"];
const DigitalPrintingProducts = ["Flyers", "Brochures", "Posters", "Business Cards", "Marketing Materials"];
const MerchandiseProducts = ["Paper bags", "Keyrings", "Plastic bags", "Button badges", "Pens", "Caps"];
const DocumentManagementServices = ["Laminating", "Wire 'o' Binding", "Email", "Fax (send/receive)", "Scanning", "Folding", "Cutting", "Comb Binding", "Full Colour Copies (A4/A3)"];
export default function Services() {
    return (
        <div className="min-h-screen flex flex-col items-center p-4">
            <main className="flex flex-col items-center gap-16 md:gap-21 lg:gap-24 w-full max-w-[calc(100vw-40px)] md:max-w-[774px] lg:max-w-[1248px]">
                {/*Hero section*/}
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative">
                    <div className="flex flex-col gap-4 items-start flex-1 relative z-1">
                        <h1 className=" capitalize font-heading font-black text-[40px] md:text-5xl lg:text-[64px]">Exceptional printing services in the Vaal Triangle</h1>
                        <p className="font-mono text-base lg:text-lg">Experience top-quality printing services with exceptional customer service in the Vanderbijlpark and Vaal Triangle area.</p>
                    </div>
                    <div className="flex-1 aspect-3/4 relative z-1 w-full">
                        <Image src="" alt="" fill className="object-contain"/>
                    </div>
                </section>
                <section className="z-3">
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
                            <Image src="" alt="" fill className="object-contain"/>
                        </div>
                        <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-left">Business Printing Services</h3>
                        <div className='grid grid-cols-2 gap-3 md:gap-3.5 lg:gap-4'>
                            {BusinessPrintingServices.map((service, index) => (
                              <div className='flex gap-4' key={service}>
                                <Building2 className='text-red w-6 h-6 shrink-0'/>
                                <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-left">{service}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 md:gap-5 lg:gap-6'>
                        <div className='relative rounded-2xl overflow-hidden aspect-4/3 w-full'>
                            <Image src="" alt="" fill className="object-contain"/>
                        </div>
                        <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-left">Personal & Miscellaneous Printing</h3>
                        <div className='grid grid-cols-2 gap-3 md:gap-3.5 lg:gap-4'>
                            {PersonalPrintingServices.map((service, index) => (
                              <div className='flex gap-4' key={service}>
                                <Printer className='text-red w-6 h-6 shrink-0'/>
                                <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-left">{service}</p>
                              </div>
                            ))}
                        </div>
                    </div>
                  </div>
                </section>
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative">
                  <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                      <Image src="" alt="" fill className="object-contain"/>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1">
                      <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">Sublimation Printing</p>
                      <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl">Vibrant Designs that last</h2>
                      <p className="font-mono font-normal text-xs md:text-sm lg:text-base">
                          With sublimation printing, your designs become part of the fabric, offering vibrant, long-lasting results that won’t fade or crack. It’s the perfect solution for personalized products that stand out.
                      </p>
                      <div className='grid grid-cols-2 gap-3 md:gap-3.5 lg:gap-4'>
                            {SublimationProducts.map((service, index) => (
                              <div className='flex gap-4' key={service}>
                                <Gift className='text-red w-6 h-6 shrink-0'/>
                                <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-left">{service}</p>
                              </div>
                            ))}
                        </div>
                  </div>
                </section>
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative">
                  <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1">
                      <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">Wide Format Printing</p>
                      <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl capitalize">bold and impactful</h2>
                      <p className="font-mono font-normal text-xs md:text-sm lg:text-base">
                          Make a big impression with our wide format printing. We use top-quality technology to print on materials like vinyl, PVC, and canvas, ideal for large signs, banners, and posters that stand out.
                      </p>
                      <div className='grid grid-cols-2 gap-3 md:gap-3.5 lg:gap-4'>
                            {WideFormatProducts.map((service, index) => (
                              <div className='flex gap-4' key={service}>
                                <Wallpaper className='text-red w-6 h-6 shrink-0'/>
                                <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-left">{service}</p>
                              </div>
                            ))}
                        </div>
                  </div>
                  <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                      <Image src="" alt="" fill className="object-contain"/>
                  </div>
                </section>
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative">
                  <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                      <Image src="" alt="" fill className="object-contain"/>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1">
                      <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">Digital Printing</p>
                      <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl capitalize">Vibrant & Versatile</h2>
                      <p className="font-mono font-normal text-xs md:text-sm lg:text-base">
                          Experience high-quality, full-color prints with our digital printing services. Perfect for everything from professional documents to promotional materials, we deliver exceptional results that stand out.
                      </p>
                      <div className='grid grid-cols-2 gap-3 md:gap-3.5 lg:gap-4'>
                            {DigitalPrintingProducts.map((service, index) => (
                              <div className='flex gap-4' key={service}>
                                <BookOpen className='text-red w-6 h-6 shrink-0'/>
                                <p className="font-mono font-normal text-xs md:text-sm lg:text-base text-left">{service}</p>
                              </div>
                            ))}
                        </div>
                  </div>
                </section>
                <section className='flex flex-col gap-4 md:gap-5 lg:gap-6 w-full'>
                  <div className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative">
                    <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1">
                      <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">T-shirt Printing</p>
                      <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl capitalize">Unleash Your Creativity with Custom T-Shirt Printing</h2>
                      <p className="font-mono font-normal text-xs md:text-sm lg:text-base">
                          Bring your unique designs to life with our custom t-shirt printing services. Whether it's bold statements or intricate artwork, we’ll transform your vision into vibrant, high-quality prints.
                      </p>
                    </div>
                    <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                      <Image src="" alt="" fill className="object-contain"/>
                    </div>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6'>
                    <div className='flex flex-col gap-3 md:gap-3.5 lg:gap-4'>
                      <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                        <Image src="" alt="" fill className="object-contain"/>
                      </div>
                      <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-left">Vinyl Cut-outs</h3>
                      <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Precision and durability for intricate logos and text.</p>
                    </div>
                    <div className='flex flex-col gap-3 md:gap-3.5 lg:gap-4'>
                      <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                        <Image src="" alt="" fill className="object-contain"/>
                      </div>
                      <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-left">Dark Shirt Printing</h3>
                      <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Vivid, full-color designs that stand out on dark fabrics.</p>
                    </div>
                    <div className='flex flex-col gap-3 md:gap-3.5 lg:gap-4'>
                      <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                        <Image src="" alt="" fill className="object-contain"/>
                      </div>
                      <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-left">White Shirt Printing</h3>
                      <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Crisp, vibrant prints that pop on white fabrics.</p>
                    </div>
                  </div>
                </section>
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 relative w-full items-start">
                  <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 flex-1">
                    <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                      <Image src="" alt="" fill className="object-contain"/>
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
                  </div>
                  <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 flex-1">
                    <div className="flex-1 relative aspect-4/3 rounded-2xl overflow-hidden w-full">
                      <Image src="" alt="" fill className="object-contain"/>
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
                  </div>
                </section>
                <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative">
                  <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1">
                      <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">Print-on-demand</p>
                      <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl capitalize">Fast and convenient custom printing</h2>
                      <p className="font-mono font-normal text-xs md:text-sm lg:text-base">
                          Get exactly what you need with our print-on-demand service. Whether your designs are on a flash drive, CD, or email, just send us the files, and we’ll print them quickly and with top quality.
                      </p>
                  </div>
                  <div className="flex-1 relative aspect-square rounded-2xl overflow-hidden w-full">
                      <Image src="" alt="" fill className="object-contain"/>
                  </div>
                </section>
            </main>
        </div>
    )
}