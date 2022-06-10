import React from 'react';
import atiq2 from '../../image/atiq2.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url(${atiq2})` }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-3xl font-bold">Hello! </h1>
                    <h2 class="mb-5 text-4xl font-bold"> I am Atiqur Rahman</h2>
                    <p class="mb-5">Professional web developer</p>
                    <button class="btn btn-primary">Contact Me</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;