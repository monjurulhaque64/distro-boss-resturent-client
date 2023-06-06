import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import img from '../../../assets/home/featured.jpg';
import './featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
                heading={"Featured Item"}
                subHeading={"check it out"}
            ></SectionTitle>

            <div className='md:flex justify-center bg-opacity-40 bg-slate-500 items-center py-20 pt-12 px-36'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam accusamus harum, a quae architecto hic dicta officiis ducimus, amet reiciendis sed? Nobis, commodi voluptatem soluta iusto deleniti, explicabo corrupti facere </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;