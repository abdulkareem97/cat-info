import React, { useEffect, useState } from 'react'


// mS9A7o/oD3mqzEkuhn30AQ==qTkF6DhmCtHXfNpU
const BreedDetails = (props) => {



    const info = props.details;
    if (info == undefined) {
        return (
            <div className='flex flex-col bg-slate-500 m-4 p-3 text-white rounded-lg'>
                    <div className='font-bold text-center'>
                                Server Error Please Try Again After Some Time
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-red-600 max-w-max self-center p-2 mt-2 rounded-3xl' onClick={props.onClick}>Go Back</button>
                    </div>
            </div>
        )
    }

    else {



        return (

            <div className={'flex flex-col ' + props.hidden}>
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

                    <div className='flex justify-center'>
                        <button className='bg-red-600 max-w-max self-center p-2 mt-2 rounded-3xl' onClick={props.onClick}>Go Back</button>
                    </div>
                </div>
            </div>
        )
    }






}

const Breeds = () => {

    const [breeds, setBreeds] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filterData, setFilterData] = useState([]);
    const [isViewDetail, setIsViewDetails] = useState('hidden');
    const [isViewBreeds, setIsViewBreeds] = useState('');
    const [breedDetails, setBreedDetails] = useState({});


    const catFact = fetch('https://catfact.ninja/breeds?limit=100');



    const getBreeds = () => {
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


    // change the mode from view all to view details
    const changeMode = (name) => {
        setIsViewBreeds('hidden')
        setIsViewDetails('')

        fetch('https://api.api-ninjas.com/v1/cats?name=' + name, {
            method: "GET",
            // headers: { "Content-type": "application/json;charset=UTF-8" },
            headers: { 'X-Api-Key': 'mS9A7o/oD3mqzEkuhn30AQ==qTkF6DhmCtHXfNpU' },
            contentType: 'application/json',
        })
            .then(response => response.json())
            .then(json => setBreedDetails(json[0]))
            .catch(err => setBreedDetails({}));

    }


    const changeModeToViewDetails = () => {
        setIsViewBreeds('')
        setIsViewDetails('hidden')
        setBreedDetails({})

    }

    useEffect(getBreeds, [])
    return (


        <>

            <div className={'flex flex-col mt-3 ' + isViewBreeds}>
                <div className='flex justify-center mb-3 '>
                    <h2 className='bg-slate-800 text-white p-3 px-7 rounded-lg font-bold'>Breeds</h2>
                </div>
                <div className='bg-slate-600 mx-3 p-3 flex justify-center'>
                    <input type="text"
                        className='bg-slate-500 text-2xl p-3 w-3/4 text-white'
                        onChange={(e) => filterBreedsData(e.target.value)}
                        placeholder='Search By Breed Name'
                    />
                </div>
                <div className='bg-slate-400 flex flex-col mt-3 mx-2 mb-5'>
                    <div className='flex justify-center text-lg text-white shadow-md'>
                        Types
                    </div>
                    <div className=''>
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
                                        <button className='bg-blue-400 max-w-max self-center p-2 mt-2 rounded-md m-2'
                                            onClick={() => changeMode(ele.breed)}
                                        >
                                            view Details
                                        </button>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
            </div>


            <BreedDetails hidden={isViewDetail} onClick={changeModeToViewDetails} details={breedDetails} />


        </>


    )
}

export default Breeds
