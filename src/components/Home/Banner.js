import React from 'react';
import portfolio from '../../image/portfolio.jpg'

const Banner = () => {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img src={portfolio} alt='' class="w-full" />

            </div>

        </div>
    );
};

export default Banner;