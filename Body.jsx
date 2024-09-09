/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import OnYourMind from "./OnYourMind";
import Restaurants from "./Restaurants";
import Line from "./Line";
function Body() {
    const [topRestaurantdata, settopRestaurantData] = useState([]);
    
    const [onYourMindData, setonYourMindData] = useState([]);
    async function fetchData(){
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const result = await response.json();
        console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        settopRestaurantData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setonYourMindData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    }
    useEffect( () =>  {
        fetchData();
    },[]);
    return (
        <div className="w-full">
            <div className="w-[70%] overflow-hidden mx-auto mt-4">
                <OnYourMind data={onYourMindData}></OnYourMind>
                <Line></Line>
                <Restaurants data={topRestaurantdata}></Restaurants>
            </div>
        </div>
    );
}

export default Body;
