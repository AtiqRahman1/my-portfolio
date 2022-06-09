import React from 'react';
import atiq from '../../image/atiq.png'

const AboutMe = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={atiq} alt='' class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Creative Front-end Web Developer</h1>
                        <p class="py-6">I am a web developer, and I'm very passionate and dedicated to my work. As a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the coding process, from discussion and collaboration.</p>
                        <a href="https://drive.google.com/file/d/17IPdzOhMD7_Ms4B_pOm5IhWqiYpiEEez/view?usp=sharing"><button class="btn btn-primary">Download Resume</button> </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;