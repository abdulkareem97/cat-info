import React from 'react'
import { Link } from 'react-router-dom'
import cat1 from '../img/cat1.jpg'
import cat2 from '../img/cat2.jpg'
import cat3 from '../img/cat3.jpg'
import cat4 from '../img/cat4.jpg'

const Home = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="px-4 pb-16   mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

            <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl text-center mx-auto primary_text editable" data-content="website-headlines">Cat Facts</h2>
            <p className="text-base text-white p-3 rounded-lg text-center md:text-lg secondary_text editable bg-slate-700" data-content="product-descriptions">Ak-cat Facts is a website that provides information about cat facts and different cat breed details. It was created for the sole purpose of providing information about the various breeds of cats, which includes their origin ,
              Behavior and Life Expectency.</p>
          </div>

          <div className='md:hidden flex flex-col bg-slate-700 rounded-lg mb-4 pt-4'>

            <h3 className='text-center text-white text-3xl underline'>
              Check Out 
            </h3>


            <div className=' p-3 flex justify-around flex-wrap '>

              <Link to={'/fact'} className='bg-slate-800  rounded-xl text-white p-3 mb-2'>
                Facts
              </Link>
              <Link to={'/breeds'} className='bg-slate-800 rounded-xl text-white p-3 mb-2'>
                Breeds
              </Link>
              <Link to={'/about'} className='bg-slate-800 rounded-xl text-white p-3 mb-2'>
                About
              </Link>
              <Link to={'/contact'} className='bg-slate-800 rounded-xl text-white p-3 mb-2'>
                Contact Us
              </Link>

            </div>
          </div>

          <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
            <div className="relative">
              <img className="object-cover w-full h-56 rounded shadow-lg " src={cat1} alt="" />
            </div>
            <div className="relative">
              <img className="object-cover w-full h-56 rounded shadow-lg" src={cat2} alt="" />
            </div>
            <div className="relative">
              <img className="object-cover w-full h-56 rounded shadow-lg" src={cat3} alt="" />
            </div>
            <div className="relative">
              <img className="object-cover w-full h-56 rounded shadow-lg" src={cat4} alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center">

            <Link to={'/about'} className="inline-flex items-center font-semibold transition-colors duration-200 text-gray-900 hover:text-gray-800 secondary_text link-editable editable">Learn more</Link>
          </div>
        </div>
      </div>
      <div className="bg-slate-900">
        <div className="px-4 pb-16 pt-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col lg:flex-row">
            <div className="max-w-xl pr-16 w-full max-md:pr-2 md:w-5/12 mb-10">
              <h5 className="mb-6 text-3xl font-extrabold leading-none text-white primary_text editable" data-content="website-headlines">Know More About Cat Facts And Different Cats</h5>
              <p className="mb-6 text-gray-400 secondary_text editable" data-content="product-descriptions">Ak - cat facts is a website for people who are interested in cats, their breeds and the way they behave. We have a lot of information about this topic, so you can always find some new facts about them.</p>
              <div className="flex items-center">
                <Link to={'/fact'} className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium text-white transition duration-200 rounded shadow-md bg-blue-600  primary_button_background primary_button_text focus:shadow-outline focus:outline-none btn-editable editable">Get started</Link>
                <Link to={'/about'} className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 accent_text link-editable editable">Learn more</Link>
              </div>
            </div>
            <div className="grid gap-5 w-7/12 max-md:w-full row-gap-5 sm:grid-cols-2">
              <div className="max-w-md" data-content="features">
                <div className="flex items-center justify-center w-16 max-md:w-full h-16 mb-4  bg-editable secondary_accent_bg ">
                  <svg className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 accent_text " stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-gray-300 primary_text editable" data-subcontent="feature-title">Looking for a fun and educational way to learn about cats? Look no further than Ak - cat facts! This app provides detailed information about different cat breeds, as well as interesting facts about cats in general. Whether you're a cat lover or just looking to expand your knowledge, Ak - cat</h6>
                <p className="text-sm text-gray-600 secondary_text editable" data-subcontent="feature-content">
                  <span className="placeholder small"></span>
                </p>
              </div>
              <div className="max-w-md" data-content="features">
                <div className="flex items-center justify-center w-16 max-md:w-full h-16 mb-4  bg-editable secondary_accent_bg ">
                  <svg className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 accent_text " stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-gray-300 primary_text editable" data-subcontent="feature-title">Looking for a fun and educational way to learn about cats? Look no further than Ak - cat facts! This handy tool provides detailed information about different cat breeds, as well as fascinating facts about our feline friends.</h6>
                <p className="text-sm text-gray-600 secondary_text editable" data-subcontent="feature-content">
                  <span className="placeholder small"></span>
                </p>
              </div>
              <div className="max-w-md" data-content="features">
                <div className="flex items-center justify-center w-16 max-md:w-full h-16 mb-4  bg-editable secondary_accent_bg ">
                  <svg className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 accent_text " stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-gray-300 primary_text editable" data-subcontent="feature-title">Looking for some fun and interesting facts about cats? Ak - cat facts has you covered! With details on different cat breeds and a wide range of cat facts, this is the perfect resource for feline lovers of all ages.</h6>
                <p className="text-sm text-gray-600 secondary_text editable" data-subcontent="feature-content">
                  <span className="placeholder small"></span>
                </p>
              </div>
              <div className="max-w-md" data-content="features">
                <div className="flex items-center justify-center w-16 max-md:w-full h-16 mb-4  bg-editable secondary_accent_bg ">
                  <svg className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 accent_text " stroke="currentColor" viewBox="0 0 52 52">
                    <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-gray-300 primary_text editable" data-subcontent="feature-title">If you're a cat lover, Ak - cat facts is the perfect app for you. With over 1,000 different cat facts and details on different cat breeds, it's the perfect way to learn more about your favorite furry friends.</h6>
                <p className="text-sm text-gray-600 secondary_text editable" data-subcontent="feature-content">
                  <span className="placeholder small"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-3">
        <div className="px-4 pb-10 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-center md:w-11/12 xl:w-8/12 md:text-center">
            <h1 className="mb-3 text-4xl font-bold text-gray-900 md:text-5xl md:leading-tight md:font-extrabold primary_text editable" data-content="website-headlines">Get Facts About Cats</h1>
            <p className="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal secondary_text editable" data-content="website-subheadlines">we are the best resource for finding about cat breeds, behavior, and health</p>
            <div className="flex items-center justify-center w-full pt-1 mx-auto mb-8">

              <Link to={'/fact'} className="bg-blue-600 text-lg text-white font-medium border border-indigo-600 px-8 py-3 rounded-sm hover:bg-blue-700 secondary_text btn-editable editable" >
                Get Started</Link>
            </div>
            <div className="flex flex-col justify-start mb-3 space-x-0 space-y-2 text-xs text-gray-600 md:flex-row md:justify-center md:space-x-8 md:space-y-0">
              <div className="flex items-center">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1 text-green-600">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <p className="text-sm text-gray-600 secondary_text editable">No Sign In required</p>
              </div>
              <div className="flex items-center">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1 text-green-600">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <p className="text-sm text-gray-600 secondary_text editable">Free Information</p>
              </div>
              <div className="flex items-center">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1 text-green-600">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <p className="text-sm text-gray-600 secondary_text editable">Share The Facts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

