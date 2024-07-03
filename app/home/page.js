import ExpandableFABtn from '@/components/ExpandableFABtn';
import NavbarHome from '@/components/NavbarHome';
import SideBar from '@/components/SideBar';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <NavbarHome />
            <SideBar />
            <ExpandableFABtn />
        </div>
    );
};

export default HomePage;

