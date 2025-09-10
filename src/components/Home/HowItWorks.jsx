import React from 'react';
import { Search, MessageCircle, ShoppingCart, Music } from 'lucide-react';

const steps = [
    {
        number: 1,
        icon: Search,
        title: 'Browse & Discover',
        description: 'Search thousands of instruments, equipment, and music teachers in your area or online.',
        colors: {
            bg: 'bg-[#DBEAFE]',
            text: 'text-[#155DFC]',
        }
    },
    {
        number: 2,
        icon: MessageCircle,
        title: 'Connect & Chat',
        description: 'Message sellers directly, ask questions, and negotiate prices in our secure chat system.',
        colors: {
            bg: 'bg-[#DCFCE7]',
            text: 'text-[#00A63E]',
        }
    },
    {
        number: 3,
        icon: ShoppingCart,
        title: 'Buy or Rent',
        description: 'Purchase outright or rent instruments with flexible terms. All transactions are protected.',
        colors: {
            bg: 'bg-[#F3E8FF]',
            text: 'text-[#9810FA]',
        }
    },
    {
        number: 4,
        icon: Music,
        title: 'Make Music',
        description: 'Start playing, learning, and creating music with your new gear or lessons.',
        colors: {
            bg: 'bg-[#FFE2E2]',
            text: 'text-[#E7000B]',
        }
    },
];

const HowItWorks = () => {
    return (
        <section className="max-w-7xl mx-auto py-12">
            <div className="max-w-11/12 mx-auto">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#101828]">
                        How It Works
                    </h2>
                    <p className="mt-2 text-lg text-[#4A5565]">
                        Getting started with SoundSellers is simple. Follow these easy steps to find your perfect instrument or teacher.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[#E5E7EB] -translate-y-1/2" style={{top: '36px'}}></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-8">
                            {steps.map((step, index) => {
                                const IconComponent = step.icon;
                                return (
                                    <div key={step.number} className="relative flex flex-col items-center text-center">
                                        {index < steps.length - 1 && (
                                            <div className="md:hidden absolute top-0 left-1/2 w-0.5 h-full bg-[#E5E7EB]" style={{ transform: 'translateX(-50%)', top: '36px', zIndex: -1 }}></div>
                                        )}

                                        <div className="relative">
                                            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${step.colors.bg}`}>
                                                <IconComponent className={`w-8 h-8 ${step.colors.text}`} />
                                            </div>
                                            <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#8D6946] rounded-full flex items-center justify-center font-bold text-[#FFFFFF]">
                                                {step.number}
                                            </div>
                                        </div>

                                        <h3 className="mt-6 text-lg font-bold text-[#101828]">{step.title}</h3>
                                        <p className="mt-2 text-base text-[#4A5565]">{step.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-24 relative rounded-3xl overflow-hidden">
                    <img 
                        src="https://res.cloudinary.com/dtjfophkh/image/upload/v1757465313/319801bc8ec2662753af3cdce0236e2ff2843b3f_oha6yu.jpg" 
                        alt="Musicians playing guitars" 
                        className="absolute inset-0 w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                    
                    <div className="relative z-10 text-center py-20 px-4">
                        <h2 className="text-4xl font-extrabold text-[#FFFFFF] sm:text-5xl">
                            Discover, Learn & Play with SoundSellers
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-[#FFFFFF]">
                            Find your perfect instrument, learn from expert-led courses, and join a vibrant community of music lovers.
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                            <button className="bg-[#A67C52] text-[#FFFFFF] font-semibold px-6 py-3 rounded-lg transition-colors">
                                Browse Instruments
                            </button>
                            <button className="border border-[#FFFFFF] text-[#FFFFFF] font-semibold px-6 py-3 rounded-lg transition-colors">
                                Explore Courses
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;