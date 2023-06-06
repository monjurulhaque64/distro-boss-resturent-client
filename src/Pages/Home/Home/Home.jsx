import React from 'react';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import PropulerMenu from '../PropulerMenu/PropulerMenu';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <PropulerMenu></PropulerMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;