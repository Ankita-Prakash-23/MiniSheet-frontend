import React from 'react'
import { useState } from 'react';
import { Star } from 'lucide-react';

const FavStar = () => {
  const [isStarred, setIsStarred] = useState(false)
  return (
    <Star
      onClick={() => setIsStarred(!isStarred)}
      className={`size-4 transition-colors 
          ${isStarred
          ? ` fill-blue-600 text-blue-600`
          : `fill-transparent text-shadow-gray-700`
        }`} />
  )
}

export default FavStar