import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./Restaurant";
import resList from "../../Utils/mochData";
import Shimmer from "./shimmer";

const Body = () => {
  const [listOfRestaurant, setList] = useState([]);
  const [searchBtn, setSearchBtn] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://analytics.swiggy.com/client/metric/event/gtm?e=impression&sqn=11&sn=collection&on=impression-collection-restaurant-item&ov=-&op=9999&ud=c1810150-efec-521f-870a-56d54e87c7bb&us=9oa2915c-1b8c-4a44-8e87-6589caf19daa&ui=-&cx=%7B%22rest_id%22%3A%2221818%22%2C%22name%22%3A%22A1%20Samosa%22%2C%22link%22%3A%22swiggy%3A%2F%2Fmenu%3Frestaurant_id%3D21818%26source%3Dcollection%26query%3DNorth%2520Indian%22%7D&sc=direct&rf=-&p=Swiggy-Dweb&ts=1696311897597&av=-&lt=&lg=&ite=")
    // Convert data to json
    // const json = await data.json()
    // console.log("json",data);
    //  setList(jsonConverter?.data?.cards[2]?.data?.data?.cards)
  };

  return listOfRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            value={searchBtn}
            onChange={(e) => {
              setSearchBtn(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter restaurent cards and update UI
              console.log("searchBtn", searchBtn);
            const filteredRestaurent =   listOfRestaurant.filter = (res) => {
                res.data.name.tolowercase().includes(searchBtn.tolowercase());
              };
              // Update UI with filter restaurent so we need to update listOfRestaurent with filteredRestaurent
              setSearchBtn(filteredRestaurent)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            listOfRestaurant = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setList(listOfRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="RestContainer">
        {/* <div className="RestrauCards"> */}
        {/*
     1. Whenever you need component which can be reused so always create component for it. 
     2. If you want to write Inline Css you need to make JS object.
     3. If you want to make dynamic data cards you need to pass props to component    */}
        {/* <RestaurantCard
        resName="Meghana Foods"
        cuisine="Faluda Ice Cream, North Indian,Asian"
      />
      <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}

        {/* {resList.map((restaurant) => <RestaurantCard key={ resData.data.id}  resData={restaurant} />)}  */}
        {/*        OR        */}
        {listOfRestaurant?.map((restaurant, index) => (
          <Restaurant key={index} resData={restaurant} />
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Body;
