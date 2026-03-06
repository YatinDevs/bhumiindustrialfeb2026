// components/DirectionsLink.jsx
"use client";

import { MapPin } from "lucide-react";

export default function DirectionsLink({ href }) {
  const handleClick = (e) => {
    e.stopPropagation();
    window.open(href, '_blank');
  };

  return (
    <span 
      onClick={handleClick}
      className="flex items-center gap-1 text-[#f97316] text-xs mt-2 cursor-pointer hover:underline"
    >
      <MapPin className="w-3 h-3" /> Get Directions
    </span>
  );
}