import React from 'react';
import { Drum, Guitar, Headphones, KeyboardMusic, Mic, Music } from 'lucide-react';

const categories = [
  { 
    id: 1, 
    name: "Guitars", 
    items: "12,500+ Items", 
    icon: <Guitar size={24} className="text-orange-500" />, 
    bg: "bg-orange-100" 
  },
  { 
    id: 2, 
    name: "Keyboards", 
    items: "8,200+ Items", 
    icon: <KeyboardMusic size={24} className="text-blue-500" />, 
    bg: "bg-blue-100" 
  },
  { 
    id: 3, 
    name: "Drums", 
    items: "6,800+ Items", 
    icon: <Drum size={24} className="text-red-500" />, 
    bg: "bg-red-100" 
  },
  { 
    id: 4, 
    name: "Audio Equipment", 
    items: "15,300+ Items", 
    icon: <Headphones size={24} className="text-purple-500" />, 
    bg: "bg-purple-100" 
  },
  { 
    id: 5, 
    name: "Microphones", 
    items: "4,100+ Items", 
    icon: <Mic size={24} className="text-green-500" />, 
    bg: "bg-green-100" 
  },
  { 
    id: 6, 
    name: "Others", 
    items: "3,200+ Items", 
    icon: <Music size={24} className="text-yellow-500" />, 
    bg: "bg-yellow-100" 
  },
];

const ShopByCategory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Shop by Category</h2>
        <p className="text-gray-500 mt-2">
          Discover thousands of musical instruments and equipment from trusted sellers worldwide
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center bg-gray-50 hover:bg-gray-100 rounded-xl p-6 shadow-sm cursor-pointer transition"
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-lg ${cat.bg} mb-3`}>
                {cat.icon}
              </div>
              <h3 className="font-semibold text-gray-800">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
