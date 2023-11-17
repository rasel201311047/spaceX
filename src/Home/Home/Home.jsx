import React from 'react';
import Navber from '../../navber/Navber';
import Upcoming from '../../page/Upcoming';
import Resentmission from '../../page/Resentmission';

const Home = () => {
    return (
        <div >
            <div className='font-serif'>
            <Navber></Navber>
            <Upcoming></Upcoming>
            <Resentmission></Resentmission>

            </div>
        </div>
    );
};

export default Home;