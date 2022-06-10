import React from 'react';
import assignment12 from '../../image/projects/assignment12.png'
import assignment11 from '../../image/projects/assignment11.png'
import assignment10 from '../../image/projects/assignment10.png'

const Projects = () => {
    return (
        <div>
            <h2 className='uppercase text-4xl text-purple-400 text-bold my-4'>Projects </h2>
            <div className='grid sm:grid-cols-1 space-y-3 lg:grid-cols-3 space-x-3'>
                <div class="card card-side bg-gray-300 shadow-xl">
                    <figure><img style={{ width: "200px", height: "350px" }} src={assignment12} alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Manufacturing company website</h2>
                        <p>This is a computer parts Manufacturing website</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">See More</button>
                        </div>
                    </div>
                </div>
                <div class="card card-side bg-gray-300 shadow-xl">
                    <figure><img style={{ width: "200px", height: "350px" }} src={assignment11} alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">warehouse management website</h2>
                        <p>This is a diffrent sorts of electric items warehouse website</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">See More</button>
                        </div>
                    </div>
                </div>
                <div class="card card-side bg-gray-300 shadow-xl">
                    <figure><img style={{ width: "200px", height: "350px" }} src={assignment10} alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Independent service provider website</h2>
                        <p>This is a career coach service provider website where anyone can take Professional training. </p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;