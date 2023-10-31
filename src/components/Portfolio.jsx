import React from 'react';
import snake from '../assets/portfolio/snake.jpg';
import tetris from '../assets/portfolio/tetris.jpg';
import cosmic from '../assets/portfolio/cosmic.jpg';
import leetclone from '../assets/portfolio/leetclone.jpg';
import news from '../assets/portfolio/news.jpg';
import nicecalendar from '../assets/portfolio/nicecalendar.png'
import aintro from '../assets/portfolio/ai.png'

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: aintro,
            githubUrl: 'https://github.com/safchik/gpt-3',
            demoUrl: 'https://aintro.netlify.app',
        },
        {
            id: 2,
            src: nicecalendar,
            githubUrl: 'https://github.com/safchik/calendar',
            demoUrl: 'https://nicecalendar.netlify.app',
        },
        {
            id: 3,
            src: news,
            githubUrl: 'https://github.com/safchik/nc-news',
        },
        {
            id: 4,
            src: snake,
            githubUrl: 'https://github.com/safchik/Snake2',
        },
        {
            id: 5,
            src: tetris,
            githubUrl: 'https://github.com/safchik/Tetris',
        },
        {
            id: 6,
            src: cosmic,
            githubUrl: 'https://github.com/safchik/cosmic-conflict-fe',
        },
        {
            id: 7,
            src: leetclone,
            githubUrl: 'https://github.com/safchik/leetclone',
        },
    ]

    return (
        <div name="portfolio" className='w-full sm:h-screen bg-gradient-to-b from-black to-gray-800  text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>


                <div className='grid sm:grid-solid-cols md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({ id, src, githubUrl, demoUrl }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <a
                                        href={githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-gray-400 hover:text-white'
                                    >
                                        Code
                                    </a>
                                    <a
                                        href={demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-gray-400 hover:text-white'
                                    >
                                        Demo
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
            <br />
        </div>
    )
}

export default Portfolio