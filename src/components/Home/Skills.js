import React from 'react';
import react from '../../image/skills/React.png'
import javascript from '../../image/skills/javascript.png'
import html from '../../image/skills/html.png'
import css from '../../image/skills/css.png'
import bootstrap from '../../image/skills/bootstrap.png'
import tailwind from '../../image/skills/Tailwind.png'
import nodejs from '../../image/skills/nodejs.png'
import mongo from '../../image/skills/mongo.png'


const Skills = () => {
    return (
        <div>
            <h2 className='text-center text-4xl text-zinc-800 text-bold my-5'> Skills</h2>
            <div className='grid sm: grid-cols-2 lg:grid-cols-4 mx-3 my-3'>
                <div class="card w-80 bg-zinc-900 shadow-xl mb-3">
                    <div class="card-body items-center text-center">
                        <img src={react} alt="" />
                        <h2 class="card-title text-3xl text-white">React</h2>
                    </div>

                </div>
                <div class="card w-80 bg-zinc-900 shadow-xl mb-3">
                    <div class="card-body items-center text-center">
                        <img src={javascript} alt="" />
                        <h2 class="card-title text-3xl text-white">JavaScript</h2>
                    </div>
                </div>
                <div class="card w-80 bg-zinc-900 shadow-xl mb-3">
                    <div class="card-body items-center text-center">
                        <img src={html} alt="" />
                        <h2 class="card-title text-3xl text-white">HTML</h2>
                    </div>
                </div>
                <div class="card w-80 bg-zinc-900 shadow-xl mb-3">
                    <div class="card-body items-center text-center">
                        <img src={css} alt="" />
                        <h2 class="card-title text-3xl text-white">CSS</h2>
                    </div>
                </div>
                <div class="card w-80 bg-zinc-900 shadow-xl mb-3">
                    <div class="card-body items-center text-center">
                        <img src={bootstrap} alt="" />
                        <h2 class="card-title text-3xl text-white">Bootstrap</h2>
                    </div>
                </div>
                <div class="card w-80 bg-zinc-900 shadow-xl mb-3">
                    <div class="card-body items-center text-center">
                        <img src={tailwind} alt="" />
                        <h2 class="card-title text-3xl text-white">TailwindCSS</h2>
                    </div>
                </div>
                <div class="card w-80 bg-zinc-900 shadow-xl mb-3">
                    <div class="card-body items-center text-center">
                        <img style={{ height: '256px', width: '256px' }} src={nodejs} alt="" />
                        <h2 class="card-title text-3xl text-white">NodeJS</h2>
                    </div>
                </div>
                <div class="card w-80 bg-zinc-900 shadow-xl mb-3">
                    <div class="card-body items-center text-center">
                        <img src={mongo} alt="" />
                        <h2 class="card-title text-3xl text-white">MongoDB</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;