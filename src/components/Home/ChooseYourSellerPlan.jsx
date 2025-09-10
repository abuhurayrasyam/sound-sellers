import React from 'react';
import { User, Crown, Check, X } from 'lucide-react';

const plans = [
    {
        name: 'Free Sellers',
        subtitle: 'Perfect for getting started Sellers',
        icon: User,
        iconColor: 'text-[#282C34]',
        iconBgClass: 'bg-[#F1F2F4]',
        price: 'Free',
        priceDetail: null,
        features: [
            { text: 'Up to 5 product listings', included: true },
            { text: 'Profile name, profile picture, short bio', included: true },
            { text: 'Default marketplace branding', included: true },
            { text: 'Analytics dashboard', included: false },
            { text: 'Storefront customization', included: false },
        ],
        buttonText: 'Get Started Free',
        buttonVariant: 'outline',
        isFeatured: false,
    },
    {
        name: 'Premium Sellers',
        subtitle: 'For growing sellers',
        icon: Crown,
        iconColor: 'text-[#FFFFFF]',
        iconBgClass: 'bg-gradient-to-b from-[#FACC15] to-[#A67C52]',
        price: '$29',
        priceDetail: '/month',
        features: [
            { text: 'Everything in Free +', included: true },
            { text: 'Up to 50 product listings', included: true },
            { text: 'Buyers can message the seller', included: true },
            { text: 'Storefront banner', included: true },
            { text: 'Analytics dashboard', included: true },
            { text: 'Rent option with deposit handling', included: true },
            { text: 'Boosted search visibility', included: true },
        ],
        buttonText: 'Start Premium',
        buttonVariant: 'solid',
        isFeatured: true,
    },
];

const ChooseYourSellerPlan = () => {
    return (
        <section className="max-w-7xl mx-auto py-12">
            <div className="max-w-11/12 max-auto">
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#101828]">
                        Choose Your Seller Plan
                    </h2>
                    <p className="mt-2 text-lg text-[#4A5565]">
                        Grow your business with the right tools. Start free and scale as you grow.
                    </p>
                </div>

                <div className="mt-10 flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8">
                    {plans.map((plan) => (
                        <div 
                            key={plan.name}
                            className={`w-full max-w-md bg-[#FFFFFF] border rounded-2xl p-8 flex flex-col relative border-[#E5E7EB]`}
                        >
                            {plan.isFeatured && (
                                <div className="absolute top-0 right-0 bg-[#16A249] text-white text-sm font-bold px-4 py-2 rounded-sm">
                                    10% OFF
                                </div>
                            )}

                            <div className="flex-shrink-0 text-center">
                                <div className={`h-16 w-16 rounded-full flex items-center justify-center mx-auto ${plan.iconBgClass}`}>
                                    <plan.icon size={32} className={plan.iconColor} />
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-[#282C34]">{plan.name}</h3>
                                <p className="mt-2 text-sm text-[#6B7280]">{plan.subtitle}</p>
                            </div>

                            <div className="my-8 text-center">
                                <span className="text-5xl font-semibold text-[#282C34]">{plan.price}</span>
                                {plan.priceDetail && (
                                    <span className="text-lg font-medium text-[#6B7280]">{plan.priceDetail}</span>
                                )}
                            </div>

                            <ul className="space-y-4 flex-grow">
                                {plan.features.map((feature) => (
                                    <li key={feature.text} className="flex items-start">
                                        {feature.included ? (
                                            <Check size={20} className="text-[#16A249] flex-shrink-0 mt-0.5" />
                                        ) : (
                                            <X size={20} className="text-[#F04438] flex-shrink-0 mt-0.5" />
                                        )}
                                        <span
                                            className={`ml-3 ${
                                                feature.included ? "text-[#282C34]" : "text-[#6B7280]"
                                            }`}
                                            >
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-8">
                                <button
                                    className={`w-full py-3 rounded-lg font-semibold transition-colors
                                    ${plan.buttonVariant === 'solid' 
                                        ? 'bg-[#A67C52] text-white' 
                                        : 'bg-[#FFFFFF] border border-[#E5E7EB] text-[#282C34]'
                                    }`}
                                >
                                    {plan.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChooseYourSellerPlan;