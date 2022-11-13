import React from 'react'
import akLogo from '../img/aklogo.png'

const About = () => {
    return (
        <div className='md:mb-24'>
            <div className='bg-slate-700 text-white mx-3 rounded-lg p-3 mb-3' >
                <div className='text-center '>
                    <h1 className='uppercase text-2xl underline'>
                        About us
                    </h1>

                    <p className='mb-3'>
                        Ak - cat facts was created in 2022 with the goal of providing accurate and up-to-date information about cats. We aim to be the go-to source for all things about cat, from fun facts and trivia to expert advice on care and breeds.

                    </p>
                    <p>
                        Our team is dedicated to curating the best content possible, and we're always updating our library of articles to make sure you're getting the most recent information. Whether you're a first-time cat owner or a seasoned pro, we hope you'll find Ak - cat facts to be a valuable resource. Thanks for stopping by!
                    </p>
                </div>
            </div>
            <div className='bg-slate-700 text-white mx-3 rounded-lg p-3'>
                <div className='text-center '>
                    <h1 className='uppercase text-2xl underline'>
                        Developed by
                    </h1>

                    <div className='flex justify-center relative'>


                        <img src={akLogo} alt="" srcSet="" className='h-10 rounded-full relative top-4' />
                        <p className='mb-3 text-3xl pt-4 pl-3'>
                            Abdul Kareem

                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
