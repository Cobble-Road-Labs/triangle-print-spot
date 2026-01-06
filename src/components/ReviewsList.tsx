'use client';

import { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

interface Review {
  [key: string]: string;
}

interface ReviewsListProps {
  limit?: number;
}

export default function ReviewsList({ limit }: ReviewsListProps = {}) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews');
        const data = await response.json();
        
        if (response.ok) {
          setReviews(data.reviews);
        } else {
          setError(data.error || 'Failed to load reviews');
        }
      } catch (err) {
        setError('Failed to load reviews');
        console.error('Error fetching reviews:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-gray-200 animate-pulse h-40 rounded-2xl" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red font-mono text-sm">{error}</p>
    );
  }

  if (reviews.length === 0) {
    return (
      <p className="font-mono text-sm text-gray-500">No reviews yet.</p>
    );
  }

  // Filter to only show reviews with 4+ stars
  let filteredReviews = reviews.filter((review) => {
    const rating = parseInt(review['Number Rating'] || '0');
    return rating >= 4;
  });

  // Sort by date (newest first)
  filteredReviews.sort((a, b) => {
    const dateA = new Date(a['Create Time'] || 0);
    const dateB = new Date(b['Create Time'] || 0);
    return dateB.getTime() - dateA.getTime();
  });

  // Apply limit if specified
  if (limit) {
    filteredReviews = filteredReviews.slice(0, limit);
  }

  if (filteredReviews.length === 0) {
    return (
      <p className="font-mono text-sm text-gray-500">No reviews to display.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
      {filteredReviews.map((review, index) => (
        <ReviewCard
          key={index}
          name={review['Reviewer Display Name'] || 'Anonymous'}
          rating={parseInt(review['Number Rating'] || '5')}
          comment={review['Comment'] || ''}
          date={review['Create Time']}
          photoUrl={review['Reviewer Profile Photo URL']}
        />
      ))}
    </div>
  );
}
