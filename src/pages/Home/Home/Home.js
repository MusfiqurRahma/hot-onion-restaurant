import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Services from '../Services/Services';
import TopHeader from '../TopHeader/TopHeader';


const Home = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Banner></Banner>
            <Items></Items>
            <Services></Services>
        </div>
    );
};

export default Home;