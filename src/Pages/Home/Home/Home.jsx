import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import PropulerMenu from '../PropulerMenu/PropulerMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonial/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <PropulerMenu></PropulerMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;