import ExpandableFABtn from '@/components/ExpandableFABtn';
import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <SideBar/>
            <ExpandableFABtn/>
        </div>
    );
};

export default HomePage;

