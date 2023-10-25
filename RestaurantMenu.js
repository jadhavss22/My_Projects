import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=19.1173012&lng=72.8840395&str=Anna%27s%20-%20Proud%20To%20Be%20South%20Indian&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=626dd5e7-1498-a175-a129-9184790efb49&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A329085%2C%22primaryRestaurantId%22%3A190198%2C%22cloudinaryId%22%3A%22haeizqirhbr01on0cht2%22%2C%22brandId%22%3A329085%2C%22dishFamilyId%22%3A%22846586%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D",
     {mode:"no-cors"}
    )
    //   const json = await data.json();

    // console.log(result);
    //   console.log("jsondata", json);
    
  console.log("response",data);
}

  return (
    <div className="menu">
      <h1>Name of Restaurent </h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
