import React from 'react'
import DmytroImage from "../assets/dmytro.jpg"
import { MdKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 '>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-6xl font-semibold text-gray-400'>I'm a Fullstack Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I'm a passionate and dedicated software developer with a strong foundation in JavaScript, React, and database management. As a graduate of the Northcoders Junior Software Developer Bootcamp, I've gained practical experience in building full-stack web applications using modern technologies. I thrive in collaborative environments and enjoy solving complex problems through innovative solutions.
                    </p>
                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 
                        flex items-center rounded-md 
                        bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </button>
                    </div>
                </div>

                <div>
                    <img src={DmytroImage} alt='my portrait'
                        className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>
        </div>
    );
};

export default Home;