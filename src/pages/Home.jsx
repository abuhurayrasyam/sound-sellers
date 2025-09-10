import React from 'react';
import Hero from '../components/Home/Hero';
import ShopByCategory from '../components/Home/ShopByCategory';
import TrendingProducts from '../components/Home/TrendingProducts';
import TopMusicTeachers from '../components/Home/TopMusicTeachers';
import WhyChooseSoundSellers from '../components/Home/WhyChooseSoundSellers';
import ChooseYourSellerPlan from '../components/Home/ChooseYourSellerPlan';

const Home = () => {
    return (
        <div>
            <section>
                <Hero></Hero>
            </section>
            <section className='bg-white'>
                <ShopByCategory></ShopByCategory>
            </section>
            <section className='bg-[#F9FAFB]'>
                <TrendingProducts></TrendingProducts>
            </section>
            <section className='bg-white'>
                <TopMusicTeachers></TopMusicTeachers>
            </section>
            <section className='bg-[#F9FAFB]'>
                <WhyChooseSoundSellers></WhyChooseSoundSellers>
            </section>
            <section className='bg-[#F6F2EE]'>
                <ChooseYourSellerPlan></ChooseYourSellerPlan>
            </section>
        </div>
    );
};

export default Home;