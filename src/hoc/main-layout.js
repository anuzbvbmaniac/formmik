import React from 'react';
import Navigation from "../pages/partials/navigation";
import Footer from "../pages/partials/footer";

const MainLayout = (props) => {
    return (
        <div className="min-h-screen bg-white w-full">
            <Navigation/>
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
