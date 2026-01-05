import Image from "next/image";
import Button from "@/components/Button";
import ArrowLink from "@/components/ArrowLink";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <main className="flex flex-col items-center gap-16 md:gap-21 lg:gap-24 w-full max-w-[calc(100vw-40px)] md:max-w-[calc(100vw-60px)] lg:max-w-[1248px]">
        {/*Hero section*/}
        <section className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center relative w-full mt-24">
          <div className="flex flex-col gap-4 items-start flex-1 relative z-1">
            <h1 className=" capitalize font-heading font-black text-[40px] md:text-5xl lg:text-[64px] leading-tight">Exceptional printing services in the vaal triangle.</h1>
            <p className="font-mono text-base lg:text-lg">Experience top-quality printing services with exceptional customer service in the Vanderbijlpark and Vaal Triangle area.</p>
            <div className="flex flex-row flex-wrap gap-3 md:gap-3.5 lg:gap-4">
              <Button href="/contact" variant="primary">Request Quote</Button>
              <Button href="/services" variant="secondary">Explore Services</Button>
            </div>
          </div>
          <div className="flex-1 shrink-0 grow aspect-3/4 relative z-1 max-h-[517px] w-full">
            <Image src="/images/home/hero.png" alt="Two white mugs stacked on each other. The mugs has the Triangle Print Spot logo on them and features a stacked series of triangles in a gradient ranging from red to black." fill className="object-contain"/>
          </div>
          <div className="aspect-square bg-red w-[600] lg:w-[720] blur-[250px] opacity-80 rounded-full absolute -right-50 lg:right-0"></div>
        </section>
        {/*Products section*/}
        <section className="z-3 w-full">
          <div className="flex flex-col md:flex-row gap-5 lg:gap-6 items-center">
            <div className="flex flex-col gap-4 flex-1">
              <p className="text-xs md:text-sm lg:text-base uppercase font-semibold text-grey">Our Services</p>
              <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl capitalize">Discover our printing solutions</h2>
              <p className="font-mono text-xs md:text-sm lg:text-base">Explore our comprehensive range of printing services tailored to meet your diverse needs, from custom merchandise to professional document management. Let us bring your ideas to life with precision and excellence.</p>
              <div className="flex flex-row flex-wrap gap-3 md:gap-3.5 lg:gap-4">
              <Button href="/contact" variant="primary">Request Quote</Button>
              <Button href="/services" variant="secondary">Learn more</Button>
            </div>
            </div>
            <div className="aspect-4/3 overflow-hidden flex-1 relative w-full">
              <Image src="/images/home/services.png" alt="A collection of Triangle Print Spot designed business stationery and cards arranged on a blank background." fill/>
            </div>
          </div>
          <div className="flex flex-col md:grid grid-cols-6 grid-rows-2 gap-4 md:gap-5 lg:gap-6 md:items-start w-full">
            <div className="flex flex-col rounded-2xl shadow-lg shadow-black/20 col-span-3 p-3 gap-3 md:p-3.5 md:gap-3.5 lg:p-4 lg:gap-4">
              <div className="aspect-square relative overflow-hidden w-full">
                <Image src="/images/home/Dropper_Bottle_Mockup_3 - square - no - bg.png" alt="A dripper bottle featuring a black dripper cap and a Triangle Print Spot sticker on its side." fill className="object-contain"/>
              </div>
              <div className="flex flex-col items-start gap-3 md:gap-3.5 lg:gap-4">
                <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl capitalize">Wide-format printing</h3>
                <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Perfect for large-scale prints like bottle stickers, banners, signs, and posters.</p>
                <ArrowLink href="">Learn more</ArrowLink>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl shadow-lg shadow-black/20 col-span-3 p-3 gap-3 md:p-3.5 md:gap-3.5 lg:p-4 lg:gap-4">
              <div className="aspect-square relative overflow-hidden w-full">
                <Image src="" alt="" fill className="object-contain"/>
              </div>
              <div className="flex flex-col items-start gap-3 md:gap-3.5 lg:gap-4">
                <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl capitalize">Business-tailored Printing</h3>
                <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Professional-quality prints for marketing collateral, stationery, and promotional materials.</p>
                <ArrowLink href="">Learn more</ArrowLink>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl shadow-lg shadow-black/20 col-span-2 p-3 gap-3 md:p-3.5 md:gap-3.5 lg:p-4 lg:gap-4">
              <div className="aspect-square relative overflow-hidden w-full">
                <Image src="" alt="" fill className="object-contain"/>
              </div>
              <div className="flex flex-col items-start gap-3 md:gap-3.5 lg:gap-4">
                <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl">Product Name</h3>
                <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Product Description</p>
                <ArrowLink href="">Learn more</ArrowLink>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl shadow-lg shadow-black/20 col-span-2 p-3 gap-3 md:p-3.5 md:gap-3.5 lg:p-4 lg:gap-4">
              <div className="aspect-square relative overflow-hidden w-full">
                <Image src="" alt="" fill className="object-contain"/>
              </div>
              <div className="flex flex-col items-start gap-3 md:gap-3.5 lg:gap-4">
                <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl">Product Name</h3>
                <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Product Description</p>
                <ArrowLink href="">Learn more</ArrowLink>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl shadow-lg shadow-black/20 col-span-2 p-3 gap-3 md:p-3.5 md:gap-3.5 lg:p-4 lg:gap-4">
              <div className="aspect-square relative overflow-hidden w-full">
                <Image src="" alt="" fill className="object-contain"/>
              </div>
              <div className="flex flex-col items-start gap-3 md:gap-3.5 lg:gap-4">
                <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl">Product Name</h3>
                <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Product Description</p>
                <ArrowLink href="">Learn more</ArrowLink>
              </div>
            </div>
          </div>
        </section >
        {/*About section*/}
        <section className="flex flex-col lg:flex-row gap-5 lg:gap-6 items-center relative">
          <div className="flex flex-col flex-1 gap-4 md:gap-5 lg:gap-6">
            <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 flex-1">
              <p className="uppercase text-grey font-mono font-normal text-xs md:text-sm lg:text-base -mb-2">About us</p>
              <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl">The Story Behind Our Ongoing Success</h2>
              <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Explore our journey, values, and commitment to excellence as a family-owned printing shop since 1998. Learn more about who we are and what drives us to deliver exceptional printing services to our valued customers.</p>
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-3.5 lg:gap-4">
              <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
                <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl">Our Mission</h3>
                <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Discover how our family-owned business brings innovation, precision, and excellence to every printing project we undertake.</p>
                <ArrowLink href="/about#our-mission">Learn more</ArrowLink>
              </div>
              <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
                <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl">Our Story</h3>
                <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Learn about our journey from humble beginnings in 1998 to becoming a trusted name in the printing industry, driven by a legacy of quality and dedication.</p>
                <ArrowLink href="/about#our-story">Learn more</ArrowLink>
              </div>
              <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
                <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl">Our Values</h3>
                <p className="font-mono font-normal text-xs md:text-sm lg:text-base">Explore the core principles that guide everything we do—quality, family values, integrity, and reliability—ensuring we deliver the best with every project.</p>
                <ArrowLink href="/about#our-values">Learn more</ArrowLink>
              </div>
            </div>
          </div>
          <div className="flex-1 relative aspect-4/3 rounded-xl w-full overflow-hidden">
            <Image src="" className="" fill alt=""/>
          </div>
        </section>
        {/*Reviews section*/}
        <section className="flex flex-col w-full items-start">
          <div className="flex flex-col gap-3 md:gap-3.5 lg:gap-4 items-start">
            <h2 className="font-heading font-bold text-xl md:text-3xl lg:text-4xl">Customer Reviews</h2>
            <p className="font-mono font-normal text-xs md:text-sm lg:text-base">We're always eager to assist you with a printing project. Reach out and let’s bring your creative vision to life.</p>
            <Button href="/contact" variant="primary">Request Quote</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6"></div>
        </section>
      </main>
    </div>
  );
}
