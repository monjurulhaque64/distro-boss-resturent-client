import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import PropulerMenu from '../PropulerMenu/PropulerMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <PropulerMenu></PropulerMenu>
        </div>
    );
};

export default Home;