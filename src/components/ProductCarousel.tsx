"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

interface Product {
  name: string;
  description: string;
  imageSrc: string;
  href: string;
}

interface ProductCarouselProps {
  products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // lg breakpoint
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3); // md breakpoint
      } else {
        setItemsPerView(1); // base
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, products.length - itemsPerView);

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left - go to next
      goToNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right - go to previous
      goToPrev();
    }

    // Reset
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="w-full">
      <div className="relative">
        {/* Carousel Container */}
        <div 
          className="overflow-hidden py-4 pb-8"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="shrink-0 px-2 md:px-2.5 lg:px-3 flex"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrev}
          disabled={!canGoPrev}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 lg:-translate-x-8 bg-white border-2 border-grey/30 rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 z-10 ${
            canGoPrev
              ? "hover:bg-red hover:text-white hover:border-red hover:scale-110 cursor-pointer"
              : "opacity-30 cursor-not-allowed"
          }`}
          aria-label="Previous products"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          disabled={!canGoNext}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 lg:translate-x-8 bg-white border-2 border-grey/30 rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 z-10 ${
            canGoNext
              ? "hover:bg-red hover:text-white hover:border-red hover:scale-110 cursor-pointer"
              : "opacity-30 cursor-not-allowed"
          }`}
          aria-label="Next products"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8 md:mt-10">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-red"
                : "w-2 bg-grey/30 hover:bg-grey/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
