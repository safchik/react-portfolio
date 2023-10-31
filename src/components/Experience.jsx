import React from 'react';
import javascript from '../assets/javascript.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import reactImage from '../assets/react.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import nextjs from '../assets/nextjs.png';
import csharp from '../assets/csharp.svg';
import postgresql from '../assets/postgresql.svg';
import visualstudio from '../assets/visualstudio.svg';
import dotnetcore from '../assets/dotnetcore.svg';

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 2,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 6,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 7,
            src: nextjs,
            title: 'NextJS',
            style: 'shadow-white'
        },
        {
            id: 8,
            src: csharp,
            title: 'C#',
            style: 'shadow-purple-500'
        },
        {
            id: 9,
            src: postgresql,
            title: 'PostgreSQL',
            style: 'shadow-pink-500'
        },
        {
            id: 10,
            src: visualstudio,
            title: 'VisualStudio',
            style: 'shadow-white'
        },
        {
            id: 11,
            src: dotnetcore,
            title: '.NETCore',
            style: 'shadow-white'
        },
    ]
    return (
        <div name="experience" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>There are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        techs.map(({ id, src, title, style }) => (
                            <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt='' className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))}
                </div>

            </div>
        </div>

    )
}

export default Experience