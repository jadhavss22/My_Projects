import React from "react";
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../../Utils/constants";

const Restaurant = ({name, cuisines, avgRating, costForTwo,deliveryTime,cloudinaryImageId}) => {
// const { resData } = props;
// console.log("resData", name);
// const {name, cuisines, avgRating, costForTwo,deliveryTime,cloudinaryImageId} = resData
return (
  <div className="res-card">
    <img
      className="res-img"
       src="https://analytics.swiggy.com/client/metric/event/gtm?e=impression&sqn=1&sn=collection&on=impression-sort-filter-grid&ov=-&op=9999&ud=c1810150-efec-521f-870a-56d54e87c7bb&us=9tq00cd7-946b-49ac-add7-1856b2338be7&ui=-&cx=%7B%22Veg%2FNon-veg%22%3A%5B%22-%22%5D%2C%22Delivery%20Time%22%3A%5B%22-%22%5D%2C%22Cost%20for%20two%22%3A%5B%22-%22%5D%7D&sc=direct&rf=-&p=Swiggy-Dweb&ts=1697014786647&av=-&lt=&lg=&ite="
      // src={
      //  CDN_URL +cloudinaryImageId
      // }
    />
    {/* first curly brace indicates some JS code inside and second indicates JS object */}
    <h3>Name : {name}</h3>
    <h4>Cuisines : {cuisines}</h4>
    <h4>Rating :{avgRating}</h4>
    <h4>RS.{costForTwo / 100}</h4>
    <h4>Delivery Time :{deliveryTime} minutes</h4>
  </div>
)
    }
export default Restaurant