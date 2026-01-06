import { Star } from 'lucide-react';
import Image from 'next/image';

interface ReviewCardProps {
  name: string;
  rating: number;
  comment: string;
  date?: string;
  photoUrl?: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

export default function ReviewCard({ name, rating, comment, date, photoUrl }: ReviewCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg shadow-black/20 flex flex-col items-center gap-4 border border-grey/50">
      {/* Profile Photo */}
      {photoUrl && (
        <div className="relative w-20 h-20 rounded-full overflow-hidden">
          <Image 
            src={photoUrl} 
            alt={`${name}'s profile`} 
            fill 
            className="object-cover"
          />
        </div>
      )}
      
      {/* Name */}
      <h4 className="font-heading font-bold text-base md:text-lg text-center">{name}</h4>
      
      {/* Date */}
      {date && (
        <p className="font-mono text-xs text-gray-500 -mt-2">{formatDate(date)}</p>
      )}
      
      {/* Divider */}
      <div className="w-full h-px bg-grey/30"></div>
      
      {/* Star Rating */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
      
      {/* Review Text */}
      <p className="font-mono text-sm md:text-base text-gray-700 text-center leading-relaxed">{comment}</p>
      
      {/* Divider */}
      <div className="w-full h-px bg-grey/30"></div>
      
      {/* Google Review Badge */}
      <div className="flex items-center gap-2">
        <div className="relative w-6 h-6">
          <Image 
            src="/icons/google-g-icon.svg" 
            alt="Google" 
            fill 
            className="object-contain"
          />
        </div>
        <span className="font-semibold text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>Google Review</span>
      </div>
    </div>
  );
}
