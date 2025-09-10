import React from 'react';
import { DollarSign, BadgeCheck, Shield } from 'lucide-react';

const features = [
    {
        icon: Shield,
        title: 'Secure Transactions',
        description: 'Every purchase is protected with our buyer guarantee and secure payment processing.',
        iconBgClass: 'bg-[#DCFCE7]',
        iconColorClass: 'text-[#00A63E]',
    },
    {
        icon: DollarSign,
        title: 'Best Prices',
        description: 'Compare prices across sellers and get the best deals on quality instruments.',
        iconBgClass: 'bg-[#FEF9C2]',
        iconColorClass: 'text-[#D08700]',
    },
    {
        icon: BadgeCheck,
        title: 'Quality Guaranteed',
        description: 'All instruments are inspected and verified for authenticity and condition.',
        iconBgClass: 'bg-[#F3E8FF]',
        iconColorClass: 'text-[#9810FA]',
    },
];

const WhyChooseSoundSellers = () => {
    return (
        <section className="max-w-7xl mx-auto py-12">
            <div className="max-w-11/12 mx-auto">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#101828]">
                        Why Choose SoundSellers?
                    </h2>
                    <p className="mt-2 text-lg text-[#4A5565]">
                        We're more than just a marketplace - we're your trusted partner in your musical journey.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8">
                        {features.map((feature) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={feature.title} className="flex flex-col items-center text-center">
                                    <div className={`flex items-center justify-center h-16 w-16 rounded-2xl ${feature.iconBgClass}`}>
                                        <IconComponent size={32} className={feature.iconColorClass} strokeWidth={2} />
                                    </div>
                                    <h3 className="mt-6 text-lg font-bold text-[#101828]">{feature.title}</h3>
                                    <p className="mt-2 text-base text-[#4A5565]">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSoundSellers;