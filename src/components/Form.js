import React, { useEffect, useState } from 'react'
import './Form.css'
function Form() {
    const [city,setCity]=useState()
    const [search,setSearch]=useState("")
    const API_KEY='aac911b30524b96ac3f74db9d8ff6bee';
    useEffect( ()=>{
        const fetchApi=async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`;
            const response= await fetch(url)
            const resJSON=await response.json();
           setCity(resJSON.main)
           
        }
            fetchApi()
      
    },[search])
    return (
        <div>
            <div className="header">
                Weather Search App

            </div>
        <div className="box">
            <div className="inputData">
                <input type="search" className="inputField" placeholder="City Name here.." onChange={(e)=>{
                    setSearch(e.target.value)
                }}>

                </input>
            </div>
            {
                !city ? (<p className="errorMsg">No data Found !</p>) : (
                    <>
                    <div className="info">
                    <h2 className="city">
                    <i className="fas fa-street-view"></i>
                    {search}       
                    </h2>
                    <h1 className="temprature">
                        {city.temp}°C
                    </h1>
                    <h3 className="min-max">
                        Min {city.temp_min}°C || Max {city.temp_max}°C
                    </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </>
                 )
            }
        
       
        </div>
        {/* <butto n onClick={fetchData}>Get</button> */}
        </div>
    )
}

export default Form
