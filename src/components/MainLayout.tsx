import React, { ReactNode } from 'react';
import Navbar from './Navbar';
interface LayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default MainLayout;
