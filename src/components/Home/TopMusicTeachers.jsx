import React from 'react';
import { Star, MapPin, ArrowUpRight } from 'lucide-react';

const teacherData = [
    {
        id: 1,
        name: 'Sarah Johnson',
        course: 'Beginner Guitar Basics',
        location: 'Los Angeles, CA',
        price: 45,
        rating: 4.9,
        tags: ['Classical', 'Jazz', 'Pop'],
        imageUrl: 'https://res.cloudinary.com/dtjfophkh/image/upload/v1757465311/58892e3dd4680eee2b5c78538b68f57c9c11adc3_nfkdfx.jpg',
    },
    {
        id: 2,
        name: 'James Carter',
        course: 'Saxophone Fundamentals',
        location: 'New York, NY',
        price: 50,
        rating: 4.8,
        tags: ['Rock', 'Blues', 'Indie'],
        imageUrl: 'https://res.cloudinary.com/dtjfophkh/image/upload/v1757465312/3d3ba83bea6f13b0a00576f0daad645daa83c462_zxlyiu.jpg',
    },
    {
        id: 3,
        name: 'Emily Thompson',
        course: 'Violin Made Easy',
        location: 'Seattle, WA',
        price: 55,
        rating: 4.7,
        tags: ['Classical', 'Folk', 'World'],
        imageUrl: 'https://res.cloudinary.com/dtjfophkh/image/upload/v1757465313/ef6d3e2a0de5f8e6f64a7f763e82f2321898e8e6_qndk5a.jpg',
    },
    {
        id: 4,
        name: 'Michael Anderson',
        course: 'Vocal Training',
        location: 'Austin, TX',
        price: 40,
        rating: 4.9,
        tags: ['Rock', 'Metal', 'Hip-Hop'],
        imageUrl: 'https://res.cloudinary.com/dtjfophkh/image/upload/v1757465316/4aee276c11d80164ad96a24824c27b49b263e97d_xpuca8.jpg',
    },
];

const TeacherCard = ({ teacher }) => (
    <div className="group relative bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
            <img src={teacher.imageUrl} alt={teacher.course} className="w-full h-52 object-cover" />
            <div className="absolute top-3 right-3 bg-[#F6F2EE] backdrop-blur-sm text-[#262626] text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <Star size={14} className="text-[#FFAE00] fill-current" />
                <span>{teacher.rating}</span>
            </div>
        </div>

        <div className="relative p-4 flex flex-col gap-3 overflow-hidden">
            <div className="absolute inset-0 bg-[#A67C52] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-b-xl"></div>

            <div className="relative z-10 flex flex-col gap-3 transition-colors duration-300 group-hover:text-white">
                <div>
                    <h3 className="text-lg font-bold text-[#101828] group-hover:text-white">{teacher.course}</h3>
                    <p className="text-sm text-[#6A7282] group-hover:text-white">{teacher.name}</p>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-[#6A7282] group-hover:text-white">
                    <MapPin size={14} />
                    <span>{teacher.location}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                    {teacher.tags.map(tag => (
                        <span
                            key={tag}
                            className="bg-[#F5F5F5] text-[#171717] text-xs font-medium px-2.5 py-1 rounded-full group-hover:bg-white group-hover:text-[#A67C52]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <hr className="border-t border-[#dbdbdb]" />

                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-xl font-bold text-[#101828] group-hover:text-white">${teacher.price}</span>
                        <span className="text-sm text-[#6A7282] group-hover:text-white">/lesson</span>
                    </div>
                    <a
                        href="#"
                        className="font-medium text-[#A67C52] flex items-center gap-1 transition-colors group-hover:text-white group-hover:px-3 group-hover:py-1 group-hover:rounded-md"
                    >
                        Book Now
                        <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const TopMusicTeachers = () => {
    return (
        <section className="max-w-7xl mx-auto py-12">
            <div className="max-w-11/12 mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#101828] tracking-tight">Top Music Teachers</h2>
                        <p className="mt-2 text-lg text-[#4A5565]">Learn from the best instructors in your area</p>
                    </div>
                    <button className="mt-4 sm:mt-0 whitespace-nowrap text-sm font-semibold text-[#A67C52] border border-[#A67C52] rounded-full px-5 py-2 transition-colors flex items-center gap-2">
                        See all
                        <ArrowUpRight size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teacherData.map(teacher => (
                        <TeacherCard key={teacher.id} teacher={teacher} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopMusicTeachers;