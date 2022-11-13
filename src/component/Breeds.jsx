import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


// mS9A7o/oD3mqzEkuhn30AQ==qTkF6DhmCtHXfNpU


const Breeds = () => {

    const [breeds, setBreeds] = useState([]);
    const [filterData, setFilterData] = useState([]);






    const getBreeds = () => {
        const catFact = fetch('https://catfact.ninja/breeds?limit=100');
        catFact.then((response) => {
            return response.json();
        }).then((value) => {
            setBreeds(value.data)
            setFilterData(value.data)
        }).catch(() => {
            setBreeds([])
        })
    }
    const filterBreedsData = (value) => {

        const filterdata = breeds.filter((v) => {
            if (v.breed.toLowerCase().includes(value.toLowerCase())) {
                return true
            }
            return false
        })
        // console.log(filterdata)
        setFilterData(filterdata)

    }








    useEffect(getBreeds, [])
    let hideSpiner = ''
    
    if (breeds.length) {
        hideSpiner = 'hidden'
        
    }
    return (


        <>

            <div className={'flex flex-col mt-3 '}>
                <div className='flex justify-center mb-3 '>
                    <h2 className='bg-slate-800 text-white p-3 px-7 rounded-lg font-bold'>Breeds</h2>
                </div>
                <div className='bg-slate-600 mx-3 p-3 flex justify-center'>
                    <input type="text"
                        className='bg-slate-500 text-2xl p-3 w-3/4 text-white rounded-md placeholder:text-center'
                        onChange={(e) => filterBreedsData(e.target.value)}
                        placeholder='Search By Breed Name'
                    />
                </div>
                <div className='bg-slate-400 flex flex-col mt-3 mx-2 mb-5'>
                    <div className='flex justify-center text-lg text-white shadow-md'>
                        Types
                    </div>


                    {/* Show Spinner */}
                    <div className={'flex flex-col bg-slate-600 m-4 p-3 text-white rounded-lg '+hideSpiner}>
                        <div role="status" className='text-center m-3'>
                            <svg className="inline mr-2 w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="">Loading...</span>
                        </div>

                    </div>



                    <div className={' '}>
                        {/* <div className='flex flex-col  justify-center text-center bg-slate-600 m-3' >
                            <div className='shadow-md text-3xl p-3 text-white'>
                            Abyssinian
                            </div>
                            <div className='bg-blue-400 max-w-max self-center p-2 mt-2 rounded-md m-2'>
                                    view Details
                            </div>
                    </div> */}

                        {
                            filterData.map((ele, ind) => {
                                return (
                                    <div className='flex flex-col  justify-center text-center bg-slate-600 m-3' key={ind} >
                                        <div className='shadow-md text-3xl p-3 text-white'>
                                            {ele.breed}
                                        </div>
                                       
                                        <Link to={'/breeds/' + ele.breed} className='bg-blue-400 max-w-max self-center p-2 mt-2 rounded-md m-2'>
                                        <i class="fa-solid fa-eye pr-2"></i>
                                            View Details</Link>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
            </div>





        </>


    )
}

export default Breeds
