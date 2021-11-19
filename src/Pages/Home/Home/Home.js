import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import DisplayReviews from '../DisplayReviews/DisplayReviews';
import Services from '../Services/Services';
import UpComming from '../UpComming/UpComming';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <DisplayReviews></DisplayReviews>
            <UpComming></UpComming>
            <Footer></Footer>
        </div>
    );
};

export default Home;