import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { RWebShare } from "react-web-share";

const BreedDetails = () => {

    const [info, setDetails] = useState('')

    const { name } = useParams()

    const initaliseData = () => {
        console.log('info')
        fetch('https://api.api-ninjas.com/v1/cats?name=' + name, {
            method: "GET",
            // headers: { "Content-type": "application/json;charset=UTF-8" },
            headers: { 'X-Api-Key': 'mS9A7o/oD3mqzEkuhn30AQ==qTkF6DhmCtHXfNpU' },
            contentType: 'application/json',
        })
            .then(response => response.json())
            .then(json => setDetails(json[0]))
            .catch(err => setDetails({}));
        // useEffect(()=>{
        // console.log(name);

        // },[name])
    }
    // initaliseData()
    useEffect(initaliseData, [])
    // const info = details;


    if (info == '') {
        return (
            <div className='flex flex-col bg-slate-500 m-4 p-3 text-white rounded-lg'>
                <div role="status" className='text-center m-3'>
                    <svg className="inline mr-2 w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="">Loading...</span>
                </div>
                <div className='flex justify-center'>
                    <Link to={'/breeds'} className='bg-red-600 max-w-max self-center p-2 mt-2 rounded-3xl' >Go Back</Link>

                </div>
            </div>
        )
    }
    else if (info == undefined) {
        return (
            <div className='flex flex-col bg-slate-500 m-4 p-3 text-white rounded-lg'>
                <div className='font-bold text-center'>
                    Server Error Please Try Again After Some Time
                </div>
                <div className='flex justify-center'>
                    <Link to={'/breeds'} className='bg-red-600 max-w-max self-center p-2 mt-2 rounded-3xl' >Go Back</Link>

                </div>
            </div>
        )
    }

    else {



        return (

            <div className={'flex flex-col '}>
                <div className='flex text-center bg-slate-300 mx-3 mt-2 p-3 justify-center rounded-xl'>
                    Details
                </div>
                <div className='bg-slate-500 text-white m-3 p-3 flex flex-col'>

                    <div className='flex justify-center'>
                        <img src={info.image_link} alt="Loading" srcSet="" className='h-60' />
                    </div>
                    <div className='flex flex-col mt-3'>
                        <div className='flex flex-col mb-3 bg-slate-800 rounded-md text-center p-3'>
                            <h2 className='shadow-md  font-bold'>Breed Name</h2>
                            <span className='pt-2'>{info.name}</span>
                        </div>
                        <div className='flex flex-col mb-3 bg-slate-800 rounded-md text-center p-3'>
                            <h2 className='shadow-md  font-bold'>Origin</h2>
                            <span className='pt-2'>{info.origin}</span>
                        </div>
                        <div className='flex flex-col mb-3 bg-slate-800 rounded-md text-center p-3'>
                            <h2 className='shadow-md  font-bold'>Lenth</h2>
                            <span className='pt-2'>{info.length}</span>
                        </div>
                        <div className='flex flex-col mb-3 bg-slate-800 rounded-md text-center p-3'>
                            <h2 className='shadow-md  font-bold'>Wieght</h2>
                            <div className='pt-2 flex justify-around'>
                                <div className='flex flex-col '>
                                    <span>
                                        Min
                                    </span>
                                    <span>
                                        {info.min_weight}
                                    </span>
                                </div>
                                <div className='flex flex-col '>
                                    <span>
                                        Max
                                    </span>
                                    <span>
                                        {info.max_weight}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col mb-3 bg-slate-800 rounded-md text-center p-3'>
                            <h2 className='shadow-md  font-bold'>Life Expectancy</h2>
                            <div className='pt-2 flex justify-around'>
                                <div className='flex flex-col '>
                                    <span>
                                        Min
                                    </span>
                                    <span>
                                        {info.min_life_expectancy}
                                    </span>
                                </div>
                                <div className='flex flex-col '>
                                    <span>
                                        Max
                                    </span>
                                    <span>
                                        {info.max_life_expectancy}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col mb-3 bg-slate-800 rounded-md text-center p-3'>
                            <h2 className='shadow-md  font-bold'>Behaviour - Out Of 5</h2>
                            <span className='pt-2'> Family Friendly : {info.family_friendly}</span>
                            <span className='pt-2'> Shedding : {info.shedding}</span>
                            <span className='pt-2'> General Health : {info.general_health}</span>
                            <span className='pt-2'> Playfulness : {info.playfulness}</span>
                            <span className='pt-2'> Children Friendly : {info.children_friendly}</span>
                            <span className='pt-2'> Grooming : {info.grooming}</span>
                            <span className='pt-2'> Intelligence : {info.intelligence}</span>
                            <span className='pt-2'> Other Pets Friendly : {info.other_pets_friendly}</span>
                        </div>

                    </div>

                    <div className='flex justify-around'>
                        <Link to={'/breeds'} className='bg-red-600 max-w-max self-center p-3  mt-2 rounded-3xl' >Go Back</Link>
                        <span className='bg-sky-500 hover:bg-sky-700 p-3 mt-2 text-white rounded-3xl cursor-pointer max-w-max'>
                            <RWebShare
                                data={{
                                    text: '',
                                    // url: "http://localhost:3000",
                                    title: "Ak - Cat_fact",
                                }}
                            // onClick={() => console.log("shared successfully!")}
                            >
                                <button className=''>
                                <i class="fa-solid fa-share pr-2"></i>
                                    Share Details </button>
                            </RWebShare>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default BreedDetails
