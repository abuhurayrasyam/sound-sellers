import React from 'react';
import Hero from '../components/Home/Hero';
import ShopByCategory from '../components/Home/ShopByCategory';
import TrendingProducts from '../components/Home/TrendingProducts';
import TopMusicTeachers from '../components/Home/TopMusicTeachers';

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
        </div>
    );
};

export default Home;