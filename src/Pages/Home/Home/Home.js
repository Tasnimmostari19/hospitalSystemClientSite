import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Covid from '../Covid/Covid';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className=''>

            <Header></Header>
            <Services></Services>
            <Covid></Covid>
            <Footer></Footer>
        </div>
    );
};

export default Home;