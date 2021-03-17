import React from 'react';

const Header = (props) => {
    return (
        <div className="bg-warm-gray-50">
            <div className="relative z-10 overflow-hidden py-12 lg:py-22">
                <div className="max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">{props.title}</h1>
                    <p className="mt-6 text-xl text-warm-gray-500 max-w-3xl">{props.subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
