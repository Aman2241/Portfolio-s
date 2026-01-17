import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#F5F5F5] font-sans selection:bg-brand-accent-pink selection:text-white">
            <Sidebar />
            <main className="lg:ml-[350px] min-h-screen p-4 md:p-8 lg:p-12 max-w-7xl">
                {children}
            </main>
        </div>
    );
};

export default Layout;
