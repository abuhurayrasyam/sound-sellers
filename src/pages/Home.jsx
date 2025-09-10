import React from 'react';
import Hero from '../components/Home/Hero';
import ShopByCategory from '../components/Home/ShopByCategory';

const Home = () => {
    return (
        <div>
            <section>
                <Hero></Hero>
            </section>
            <section>
                <ShopByCategory></ShopByCategory>
            </section>
        </div>
    );
};

export default Home;