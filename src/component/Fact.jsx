import React, { useEffect, useState } from 'react'
import { RWebShare } from "react-web-share";

const Fact = () => {

    const [data, setData] = useState('Click On "Next Fact" To Get The Facts About Cats');
    const [favtData, setFavtData] = useState(localStorage.getItem('Facts') == null ? [] : JSON.parse(localStorage.getItem('Facts')));
    const catFact = fetch('https://catfact.ninja/fact');

    const getFact = () => {
        catFact.then((response) => {
            return response.json();
        }).then((value) => {
            setData(value.fact)
        }).catch(() => {
            setData('Try Again')
        })
    }

    const setFavt = () => {
        const obj = { id: data.length, desc: data }
        // localStorage.setItem("Facts", JSON.stringify(obj));  
        let factArr;
        let favt = localStorage.getItem('Facts');
        if (favt == null) {
            factArr = []
        } else {
            factArr = JSON.parse(favt)
        }
        factArr.push(obj);
        setFavtData(factArr);
        localStorage.setItem('Facts', JSON.stringify(factArr))
    }

    const delFavt = (id) => {
        console.log(id)
        let favt = localStorage.getItem('Facts');
        let factArr = JSON.parse(favt);
        factArr.splice(id, 1);
        setFavtData(factArr);
        localStorage.setItem('Facts', JSON.stringify(factArr))
    }


    return (
        <div className='flex flex-col mt-3 '>
            <div className='flex justify-center'>
                <h2 className='underline text-lg '>Fact About Cats</h2>
            </div>
            <div className='flex justify-center p-5 text-center bg-slate-800 text-white rounded-3xl mx-3'>
                <p className=''> {data}</p>
            </div>
            <div className='flex justify-around mt-4'>
                <button className='bg-sky-500 hover:bg-sky-700 p-3 text-white rounded-3xl cursor-pointer foc' onClick={getFact}>
                    Next Fact
                </button>
                <button className='bg-sky-500 hover:bg-sky-700 p-3 text-white rounded-3xl cursor-pointer' onClick={setFavt}>
                    Favourite
                </button>
                <span className='bg-sky-500 hover:bg-sky-700 p-3 text-white rounded-3xl cursor-pointer'>
                    <RWebShare
                        data={{
                            text: data,
                            // url: "http://localhost:3000",
                            title: "Ak - Cat_fact",
                        }}
                    // onClick={() => console.log("shared successfully!")}
                    >
                        <button>Share Fact</button>
                    </RWebShare>
                </span>
            </div>
            <div className='flex flex-col justify-center bg-slate-400 mt-5 mx-3 rounded-md p-3 mb-5'>
                <div className='mb-3 flex justify-center text-2xl'>
                    <h3 className='bg-teal-800 p-3 text-white rounded-lg '>Favorite Facts</h3>
                </div>
                <div className=''>
                    {/* <div className=' bg-slate-800 text-white p-3 flex flex-col justify-center'>
                                <p className='text-center border-b-2'>
                                Like humans, cats tend to favor one paw over another
                                </p>
                                <button className='bg-red-600 max-w-max self-center p-2 mt-2 rounded-3xl '>Remove</button>
                            </div> */}
                    {
                        favtData.map((value, index) => {
                            return (
                                <div className=' bg-slate-800 text-white p-3 flex flex-col justify-center mb-3' key={value.id}>
                                    <p className='text-center border-b-2'>
                                        {value.desc}
                                    </p>
                                    <div className='flex justify-around'>

                                        <button className='bg-red-600 max-w-max self-center p-2 mt-2 rounded-3xl ' id={index} onClick={() => delFavt(index)}>Remove</button>

                                        <RWebShare
                                            data={{
                                                text: value.desc,
                                                // url: "http://localhost:3000",
                                                title: "Ak - Cat_fact",
                                            }}
                                        // onClick={() => console.log("shared successfully!")}
                                        >
                                            <button className='bg-blue-400 max-w-max self-center p-2 mt-2 rounded-3xl '>Share Fact</button>
                                        </RWebShare>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default Fact
