import React from 'react';
import Banner from './Banner/Banner';
import OurGoal from './OurGoal/OurGoal';
import Services from './Services/Services';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OurGoal></OurGoal>
        </div>
    );
};

export default Home;