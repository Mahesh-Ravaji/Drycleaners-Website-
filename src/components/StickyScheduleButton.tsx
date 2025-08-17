import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const StickyScheduleButton = () => {
  return (
    <Link
      to="/schedule"
      className="fixed bottom-6 right-6 bg-[#0096c7] hover:bg-[#007ba3] text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 z-50 flex items-center space-x-2"
    >
      <Calendar className="w-5 h-5" />
      <span className="font-semibold">Schedule Pickup</span>
    </Link>
  );
};

export default StickyScheduleButton;