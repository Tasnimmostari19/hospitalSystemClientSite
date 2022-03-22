import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Covid from '../Covid/Covid';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className=''>

            <Header></Header>
            <Services></Services>
            <Covid></Covid>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;