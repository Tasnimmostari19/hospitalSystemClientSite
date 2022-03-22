import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='bg-neutral-900 h-screen w-full top-0 left-0'>

            <Header></Header>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;