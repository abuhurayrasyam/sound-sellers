import React from 'react';
import Hero from '../components/Home/Hero';
import ShopByCategory from '../components/Home/ShopByCategory';
import TrendingProducts from '../components/Home/TrendingProducts';

const Home = () => {
    return (
        <div>
            <section>
                <Hero></Hero>
            </section>
            <section>
                <ShopByCategory></ShopByCategory>
            </section>
            <section>
                <TrendingProducts></TrendingProducts>
            </section>
        </div>
    );
};

export default Home;