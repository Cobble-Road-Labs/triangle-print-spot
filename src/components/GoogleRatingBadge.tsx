'use client';

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Review {
  [key: string]: string;
}

export default function GoogleRatingBadge() {
  const [averageRating, setAverageRating] = useState<number>(0);
  const [reviewCount, setReviewCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRatings() {
      try {
        const response = await fetch('/api/reviews');
        const data = await response.json();
        
        if (response.ok && data.reviews.length > 0) {
          const reviews: Review[] = data.reviews;
          
          // Calculate average rating from all reviews with ratings
          const validReviews = reviews.filter(review => {
            const rating = parseInt(review['Number Rating'] || '0');
            return rating > 0;
          });
          
          const sum = validReviews.reduce((acc, review) => {
            return acc + parseInt(review['Number Rating'] || '0');
          }, 0);
          
          const avg = validReviews.length > 0 ? sum / validReviews.length : 0;
          
          setAverageRating(Number(avg.toFixed(1)));
          setReviewCount(validReviews.length);
        }
      } catch (err) {
        console.error('Error fetching ratings:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchRatings();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg shadow-black/20 p-4 md:p-5 lg:p-6 animate-pulse">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className="w-24 h-4 bg-gray-200 rounded"></div>
            <div className="w-32 h-6 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (reviewCount === 0) {
    return null;
  }

  // Calculate which stars to show (full, partial, empty)
  const fullStars = Math.floor(averageRating);
  const hasPartialStar = averageRating % 1 !== 0;
  const partialStarPercentage = (averageRating % 1) * 100;

  return (
    <Link href="https://g.page/r/CUSPgd064OYkEAE/review" target="_blank" className="bg-white rounded-2xl shadow-lg shadow-black/20 p-4 hover:shadow-xl transition-shadow border border-grey/50 mt-4">
      <div className="flex items-center gap-4 md:gap-5 lg:gap-6">
        {/* Google Logo */}
        <div className="relative w-8 h-8 md:w-12 md:h-12 shrink-0">
          <Image 
            src="/icons/google-g-icon.svg" 
            alt="Google" 
            fill 
            className="object-contain"
          />
        </div>
        
        {/* Rating Info */}
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-sm md:text-base" style={{ fontFamily: 'Roboto, sans-serif' }}>Google Rating</h3>
          
          <div className="flex items-center gap-2">
            <span className="font-normal text-base" style={{ fontFamily: 'Roboto, sans-serif' }}>{averageRating}</span>
            
            {/* Star Rating */}
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => {
                if (i < fullStars) {
                  // Full star
                  return (
                    <Star
                      key={i}
                      size={16}
                      className="fill-orange-400 text-orange-400"
                    />
                  );
                } else if (i === fullStars && hasPartialStar) {
                  // Partial star
                  return (
                    <div key={i} className="relative">
                      <Star size={16} className="text-gray-300" />
                      <div 
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${partialStarPercentage}%` }}
                      >
                        <Star size={16} className="fill-orange-400 text-orange-400" />
                      </div>
                    </div>
                  );
                } else {
                  // Empty star
                  return (
                    <Star
                      key={i}
                      size={16}
                      className="text-gray-300"
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
