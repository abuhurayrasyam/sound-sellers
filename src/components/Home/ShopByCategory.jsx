import React from 'react';
import { Drum, Guitar, Headphones, KeyboardMusic, Mic, Music } from 'lucide-react';

const categories = [
  { 
    id: 1, 
    name: "Guitars", 
    items: "12,500+ Items", 
    icon: <Guitar size={24} className="text-[#F54900]" />, 
    bg: "bg-[#FFEDD4]" 
  },
  { 
    id: 2, 
    name: "Keyboards", 
    items: "8,200+ Items", 
    icon: <KeyboardMusic size={24} className="text-[#155DFC]" />, 
    bg: "bg-[#DBEAFE]" 
  },
  { 
    id: 3, 
    name: "Drums", 
    items: "6,800+ Items", 
    icon: <Drum size={24} className="text-[#E7000B]" />, 
    bg: "bg-[#FFE2E2]" 
  },
  { 
    id: 4, 
    name: "Audio Equipment", 
    items: "15,300+ Items", 
    icon: <Headphones size={24} className="text-[#9810FA]" />, 
    bg: "bg-[#F3E8FF]" 
  },
  { 
    id: 5, 
    name: "Microphones", 
    items: "4,100+ Items", 
    icon: <Mic size={24} className="text-[#00A63E]" />, 
    bg: "bg-[#DCFCE7]" 
  },
  { 
    id: 6, 
    name: "Others", 
    items: "3,200+ Items", 
    icon: <Music size={24} className="text-[#D08700]" />, 
    bg: "bg-[#FEF9C2]" 
  },
];

const ShopByCategory = () => {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <div className="max-w-11/12 mx-auto text-center">

        <h2 className="text-2xl md:text-3xl font-extrabold text-[#101828] ">Shop by Category</h2>
        <p className="text-[#4A5565] mt-2">
          Discover thousands of musical instruments and equipment from trusted sellers worldwide
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center bg-[#FFFFFF] border-[#E5E7EB] rounded-xl p-6 shadow-sm cursor-pointer transition"
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-lg ${cat.bg} mb-3`}>
                {cat.icon}
              </div>
              <h3 className="font-semibold text-[#101828]">{cat.name}</h3>
              <p className="text-sm text-[#6A7282]">{cat.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;