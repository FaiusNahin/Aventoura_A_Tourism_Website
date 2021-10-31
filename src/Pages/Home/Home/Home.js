import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Packages from '../Packages/Packages';
import Snaps from '../Snaps/Snaps';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Feature></Feature>
            <Packages></Packages>
            <Snaps></Snaps>
        </>
    );
};

export default Home;